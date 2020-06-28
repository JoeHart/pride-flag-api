import React from "react";
import ReactMarkdown from "react-markdown";
import Readme from "../README.md";

export default function Index() {
  return <ReactMarkdown source={Readme} />;
}
