// Project 10: fetch data from API
// const url = "https://jsonplaceholder.typicode.com/users/1";
import React from "react";

const Project10 = () => {
  const [data, setData] = React.useState("");
  const url = "https://jsonplaceholder.typicode.com/users/1";

  const fetchDataFromAPI = async () => {
    console.log("Fetching data....");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="project">
      <h3>Project 10: fetch data from API</h3>
      {data && (
        <div>
          <p>
            <b>Name:</b> {data.name}
          </p>
          <p>
            <b>Website:</b> {data.website}
          </p>
          <p>
            <b>Email:</b> {data.email}
          </p>
          <p>
            <b>Phone:</b> {data.phone}
          </p>
        </div>
      )}
      <button onClick={fetchDataFromAPI}>Fetch</button>
    </div>
  );
};

export default Project10;
