import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Head from "next/head";
import Homepage from "../data/content/Homepage.mdx";
import ProgressFlag from "../components/ProgressFlag";

const Container = styled.div`
  font-size: 10vw;
`;

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>🏳️‍🌈 Pride Flag API</title>
      </Head>
      <Homepage />
      <Container>
        <ProgressFlag />
      </Container>
    </React.Fragment>
  );
}
