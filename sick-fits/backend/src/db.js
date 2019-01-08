// This file connects to the remote DB and give us the ability to query it with JS
const { Prisma } = require('prisma-binding');
// import { Prisma } from 'prisma-binding';

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;