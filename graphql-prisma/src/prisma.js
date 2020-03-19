import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466",
  secret: "thisismysupersecrettext",
  fragmentReplacements
});

// prisma.query.users(null, '{ id name email }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

export { prisma as default };
