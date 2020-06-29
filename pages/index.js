import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import Homepage from "../data/content/Homepage.md";
import ProgressFlag from "../components/ProgressFlag";

const Container = styled.div`
  font-size: 10vw;
`;

export default function Index() {
  return (
    <React.Fragment>
      <ReactMarkdown source={Homepage} />
      <Container>
        <ProgressFlag />
      </Container>
    </React.Fragment>
  );
}
