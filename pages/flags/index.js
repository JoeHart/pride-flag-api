import React from "react";
import { useQuery } from "urql";
import { withUrqlClient } from "next-urql";
import FlagCard from "../../components/FlagCard";
import styled from "styled-components";
import ALL_FLAGS from "../../graphql/allFlags";

const FlagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
`;
const BrowseFlags = () => {
  const [{ data, fetching, error }] = useQuery({
    query: ALL_FLAGS,
  });

  if (fetching) return <p>Loading...</p>;
  if (error) {
    return (
      <div>
        <p>Errored!</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  data.allFlags.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; //nameA comes first
    }
    if (nameA > nameB) {
      return 1; // nameB comes first
    }
    return 0; // names must be equal
  });

  return (
    <div>
      <h2>Browse Flags</h2>
      <FlagContainer>
        {data.allFlags.map((flag) => {
          return <FlagCard {...flag} />;
        })}
      </FlagContainer>
    </div>
  );
};

export default withUrqlClient(
  () => ({
    url: "/api/graphql",
    fetchOptions: {
      mode: "cors", // no-cors, cors, *same-origin
    },
  }),
  { ssr: true }
)(BrowseFlags);
