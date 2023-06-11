import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  font-size: 8em;
  font-family: Gilbert;
  margin: 0;

  @media only screen and (max-width: 70em) {
    font-size: 12vw;
  }
  & a:after {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  & > * + * {
    margin-left: 1em;
  }
`;

export default function SiteHeader({ id, name, svgBase64, year, colors }) {
  return (
    <header>
      <Title>
        <Link href="/">
          🏳️‍🌈 Pride Flag API
        </Link>
      </Title>
      <nav>
        <NavList>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="https://github.com/JoeHart/pride-flag-api">Github Repo</a>
          </li>
          <li>
            <Link href="/flags">
              Browse Flags
            </Link>
          </li>
        </NavList>
      </nav>
    </header>
  );
}
