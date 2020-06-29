import React from "react";
import { useQuery } from "urql";
import { withUrqlClient } from "next-urql";
import FLAG from "../../graphql/flag";
import FlagCard from "../../components/FlagCard";
import { useRouter } from "next/router";

import styled from "styled-components";

const Container = styled.div`
  max-width: 20em;
  margin: 0 auto;
`;
const BrowseFlags = () => {
  const router = useRouter();
  const { id } = router.query;
  const [res] = useQuery({
    query: FLAG,
    variables: { id },
  });

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) {
    return (
      <div>
        <p>Errored!</p>
        <p>{JSON.stringify(res.error)}</p>
      </div>
    );
  }

  return (
    <Container>
      <FlagCard {...res.data.flag} />
    </Container>
  );
};

export default withUrqlClient(
  () => ({
    url: "http://localhost:3000/api/graphql",
    fetchOptions: {
      mode: "cors", // no-cors, cors, *same-origin
    },
  }),
  { ssr: true }
)(BrowseFlags);
