import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "schema/schema.graphql",
  resolvers,
});

server.start(() => console.log("SaySome Server Running!"));
