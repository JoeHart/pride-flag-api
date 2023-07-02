import gql from "graphql-tag";

const FLAG = gql`
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

export default FLAG;
