import connect from "@frontity/connect";
import React from "react";
import TCPosts from "./tc-posts";

const TcHome = ({ actions }) => {
  return (
    <div className="tc-outer-container">
      <div className="tc-inner-container">
        <h4 className="how-help">Hoe kan ik je helpen?</h4>
        <h4 className="ther-coach">THERAPIE & COACHING</h4>
        <TCPosts />
      </div>
    </div>
  );
};

export default connect(TcHome);
