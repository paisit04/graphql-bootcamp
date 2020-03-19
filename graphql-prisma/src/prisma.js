import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  fragmentReplacements
});

// prisma.query.users(null, '{ id name email }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

export { prisma as default };
