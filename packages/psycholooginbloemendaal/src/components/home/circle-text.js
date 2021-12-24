import connect from "@frontity/connect";
import React, { Component } from "react";
import { ArcText } from "@arctext/react";

const RoundedDiv = () => {
  return (
    <div className="rounded-div">
      <img
        src="https://live.staticflickr.com/65535/51772859944_88de55233a_c.jpg"
        alt="over-mij-preview"
        className="foto-over-mij"
      />
      <div className="text-wrap">
        <h1>WELKOM</h1>
        <h2>Ik help je graag</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusaminvidunt
          ut labore et labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusaminvidunt ut labore et dolore magna{" "}
        </p>
      </div>
    </div>
  );
};

export default connect(RoundedDiv);
