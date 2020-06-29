import gql from "graphql-tag";

export const ALL_FLAGS = gql`
  query {
    allFlags {
      id
      name
      year
      colors {
        name
        hexCode
      }
      svg
      svgUrl
      svgBase64
    }
  }
`;

export const FLAG = gql`
  query($id: String!) {
    flag(id: $id) {
      id
      name
      year
      colors {
        name
        hexCode
      }
      svg
      svgUrl
      svgBase64
    }
  }
`;
