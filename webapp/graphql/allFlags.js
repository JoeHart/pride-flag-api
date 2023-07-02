import gql from "graphql-tag";

const ALL_FLAGS = gql`
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

export default ALL_FLAGS;
