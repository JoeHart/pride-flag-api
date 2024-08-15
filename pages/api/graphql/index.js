import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

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
      return `https://pride-flag.dev/api/flags/${parent.id}/SVG`;
    },
    svgBase64: (parent) => {
      const base64Data = base64.btoa(parent.svg);
      return "data:image/svg+xml;base64," + base64Data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cors: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault]
});

export default startServerAndCreateNextHandler(server);


// export default apolloServer.start().then(() => {
//   const handler = apolloServer.createHandler({ path: "/api/graphql" });

//   return cors((req, res) => {
//     console.log(req.method, req.url, req.base64Data)
//     return req.method === "OPTIONS" ? send(res, 200, "ok") : handler(req, res);
//   });
// });
