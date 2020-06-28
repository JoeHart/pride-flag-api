import React from "react";
import ReactMarkdown from "react-markdown";
import Readme from "../README.md";

export default function Index() {
  return (
    <div className="page">
      <ReactMarkdown source={Readme} />
      <div class="flagContainer">
        <div class="prideFlag">
          <div class="progressUpper"></div>
          <div class="progressLower"></div>
        </div>
      </div>
    </div>
  );
}
