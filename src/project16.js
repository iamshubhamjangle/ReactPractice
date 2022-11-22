/**
 * You have been provided with a data string
 * This string needs to be displayed in the browser.
 */

import React from "react";

const Project16 = () => {
  const data = "<h4 style='color: blue;'>Sponsored Content</h4>";

  return (
    <div className="project">
      <h3>Project 16: Set the following data string as inner HTML</h3>
      <pre>data: {data}</pre>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
};

export default Project16;
