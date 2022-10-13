import React from "react";

const Comment = ({
  id,
  author,
  timestamp,
  commentText,
  paddingLeft,
  children,
  handleReply,
}) => {
  const [inputReply, setInputReply] = React.useState("");

  function handleReplySubmit(e) {
    if (!inputReply) {
      e.preventDefault();
      return;
    }

    const newComment = {
      id: Math.floor(Date.now() * Math.random()),
      author: "Superman",
      timestamp: new Date().toLocaleString(),
      commentText: inputReply,
      children: [],
    };

    e.preventDefault();
    handleReply(e, id, newComment);
    setInputReply("");
  }

  return (
    <div className="my1" style={{ paddingLeft: `${paddingLeft}px` }}>
      <h4 className="my1" style={{ display: "inline" }}>
        @{author}
      </h4>
      <p className="my0 mx1" style={{ display: "inline", fontSize: "0.8em" }}>
        {timestamp}
      </p>
      <p className="my0" style={{ marginLeft: "1rem" }}>
        {commentText}
      </p>
      <form onSubmit={(e) => handleReplySubmit(e)}>
        <input
          type="text"
          value={inputReply}
          onChange={(e) => setInputReply(e.target.value)}
          required
        ></input>
        <button>Reply</button>
      </form>
      {children &&
        children.map((c) => {
          return (
            <Comment
              key={c.id}
              id={c.id}
              author={c.author}
              timestamp={c.timestamp}
              commentText={c.commentText}
              paddingLeft={paddingLeft + 20}
              children={c.children}
              handleReply={handleReply}
            />
          );
        })}
    </div>
  );
};

export default Comment;
