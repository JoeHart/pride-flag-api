import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PrideFlag from "../../data/flags/svg/intersexInclusive_2021.svg?component"

const Title = styled.h1`
  font-size: 7em;
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

const Flag = styled(PrideFlag)`
 margin-right: 0.5ch;
`

export default function SiteHeader({ id, name, svgBase64, year, colors }) {
  return (
    <header>
      <Title>
        <Link href="/">
          <Flag width="1.2em" height="auto" />
          Pride Flag API
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
