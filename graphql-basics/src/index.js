import { GraphQLServer } from "graphql-yoga";
import db from "./db";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";
import User from "./resolvers/User";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Post,
    Comment,
    User
  },
  context: {
    db
  }
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
