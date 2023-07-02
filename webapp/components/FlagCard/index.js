import React from "react";
import styled from "styled-components";

const FlagImage = styled.img`
  max-width: 100%;
  width:100%;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.35);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlagContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const FlagName = styled.h2`
  margin: 0.5em 0 0 0;
  font-size: 1.2em;
`;
export default function FlagCard({ id, name, svgBase64, year, colors }) {
  return (
    <Card>
      <FlagContainer>
        <FlagImage src={svgBase64} />
      </FlagContainer>
      <div>
        <FlagName>{name}</FlagName>
        <span>{year}</span>
      </div>
    </Card>
  );
}
