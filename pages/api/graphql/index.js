import { ApolloServer, gql } from "apollo-server-micro";
import * as queryResolvers from "./queryResolvers";
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
    emoji: String!
    colors: [Color!]!
    svg: String!
  }
`;

const resolvers = {
  Query: {
    ...queryResolvers,
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
export default apolloServer.createHandler({ path: "/api/graphql" });
