import React from "react";
import styled from "styled-components";

const FlagImage = styled.img`
  max-width: 100%;
  max-height: 10em;

  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.35);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlagContainer = styled.div`
  max-height: 10em;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlagName = styled.h2`
  margin: 0.5em 0 0 0;
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
