import { ApolloServer, gql } from "apollo-server-micro";
import * as queryResolvers from "./queryResolvers";
import base64 from "Base64";

const typeDefs = gql`
  type Query {
    flag(id: String!): Flag!
    allFlags: [Flag!]!
  }

  type Color {
    hexCode: String!
    name: String!
    r: Int!
    g: Int!
    b: Int!
  }

  type Flag {
    id: ID!
    name: String!
    year: String!
    emoji: String
    colors: [Color!]!
    svg: String!
    svgBase64: String!
    svgUrl: String!
  }
`;

const resolvers = {
  Query: {
    ...queryResolvers,
  },
  Flag: {
    svgUrl: (parent) => {
      return `https://pride.dev/api/flags/${parent.id}/SVG`;
    },
    svgBase64: (parent) => {
      const base64Data = base64.btoa(parent.svg);
      return "data:image/svg+xml;base64," + base64Data;
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cors: true,
});

const startServer = apolloServer.start();

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  await startServer;

  apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
export default handler;
