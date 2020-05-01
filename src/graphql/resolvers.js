import { members, login } from "./db";

const resolvers = {
  Query: {
    members: () => members,
    login: (_, { email, password }) => login(email, password),
  },
};

export default resolvers;
