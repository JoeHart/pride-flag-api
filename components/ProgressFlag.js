import React from "react";
import styled from "styled-components";

const Flag = styled.div`
  margin: 0 auto;
  box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.75);
  width: 3em;
  height: 2em;
  background: linear-gradient(
    #e20a17 0%,
    #e20a17 calc(100% / 6),
    #fd8d25 calc(100% / 6),
    #fd8d25 calc(calc(100% / 6) * 2),
    #feec34 calc(calc(100% / 6) * 2),
    #feec34 calc(calc(100% / 6) * 3),
    #108028 calc(calc(100% / 6) * 3),
    #108028 calc(calc(100% / 6) * 4),
    #0f54fb calc(calc(100% / 6) * 4),
    #0f54fb calc(calc(100% / 6) * 5),
    #751086 calc(calc(100% / 6) * 5)
  );
  position: relative;
  overflow: hidden;
`;

const ProgressChevronUpper = styled.div`
  content: "";
  display: block;
  position: absolute;
  width: 2em;
  height: 1em;
  overflow: hidden;

  &:after {
    content: "";
    transform: rotate(45deg);
    position: absolute;
    z-index: 1;
    width: 2em;
    height: 2em;
    margin-left: -1em;
    background: linear-gradient(
      black 0%,
      black calc(100% / 12),
      #784f17 calc(100% / 12),
      #784f17 calc(calc(100% / 12) * 2),
      #5bcefa calc(calc(100% / 12) * 2),
      #5bcefa calc(calc(100% / 12) * 3),
      #f5a9b8 calc(calc(100% / 12) * 3),
      #f5a9b8 calc(calc(100% / 12) * 4),
      white calc(calc(100% / 12) * 4),
      white calc(calc(100% / 12) * 5)
    );
  }
`;

const ProgressChevronLower = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 1em;
  width: 2em;
  height: 1em;
  overflow: hidden;

  &:after {
    content: "";
    transform: translate(0em, -1em) rotate(135deg);
    position: absolute;
    z-index: 1;
    width: 2em;
    height: 2em;
    margin-left: -1em;
    background: linear-gradient(
      black 0%,
      black calc(100% / 12),
      #784f17 calc(100% / 12),
      #784f17 calc(calc(100% / 12) * 2),
      #5bcefa calc(calc(100% / 12) * 2),
      #5bcefa calc(calc(100% / 12) * 3),
      #f5a9b8 calc(calc(100% / 12) * 3),
      #f5a9b8 calc(calc(100% / 12) * 4),
      white calc(calc(100% / 12) * 4),
      white calc(calc(100% / 12) * 5)
    );
  }
`;
export default function ProgressFlag() {
  return (
    <Flag>
      <ProgressChevronUpper />
      <ProgressChevronLower />
    </Flag>
  );
}
