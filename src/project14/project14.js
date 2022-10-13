// create a comment box with infinite nested comments
import React, { useState } from "react";
import Comment from "./comment";
import { initialState } from "./dummy_data";

const Project14 = () => {
  const [inputComment, setInputComment] = useState("");
  const [commentFeed, setCommentFeed] = useState(initialState);

  function handleCommentSubmit(e) {
    if (!inputComment) {
      e.preventDefault();
      return;
    }

    const newComment = {
      id: Math.floor(Date.now() * Math.random()),
      author: "Superman",
      timestamp: new Date().toLocaleString(),
      commentText: inputComment,
      children: [],
    };

    console.log(newComment);

    setCommentFeed([newComment, ...commentFeed]);
    setInputComment("");
    e.preventDefault();
  }

  function findNodeAndAppend(id, arr, newComment) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].children.push(newComment);
      }
      if (arr[i].children) {
        findNodeAndAppend(id, arr[i].children, newComment);
      }
    }
  }

  function handleReply(e, id, obj) {
    findNodeAndAppend(id, commentFeed, obj);
    setCommentFeed(commentFeed);
    e.preventDefault();
  }

  return (
    <div className="project">
      {/* heading */}
      <h3>Project 14: Comment box with infinite nested comments</h3>

      {/* Comment form */}
      <form onClick={(e) => handleCommentSubmit(e)}>
        <h5 className="my1">Commenting as: @Superman</h5>
        <input
          type="text"
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          required
        ></input>
        <button type="submit">Comment</button>
      </form>

      {/* Comments */}
      <div className="my1 project">
        <h3>Discussion Forum</h3>
        {commentFeed.map((c) => {
          return (
            <Comment
              key={c.id}
              id={c.id}
              author={c.author}
              timestamp={c.timestamp}
              commentText={c.commentText}
              paddingLeft={10}
              children={c.children}
              handleReply={handleReply}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project14;
