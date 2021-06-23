import { gql } from 'apollo-server-express';
// import { ApolloServer,gql } from 'apollo-server';
// const { ApolloServer, gql } = require('apollo-server');
import userInput from '../user/inputs';
import userType from '../user/type';
import { date } from 'faker';

const userQueryMutation = gql`
  ${userInput}
  ${userType}

  extend type Query {
    user(UserDetails: userGetInput): User
    users(pageNo: Int, pageSize: Int, search: String): UserConnection
  }

  extend type Mutation {
    register(UserDetails: RegisterInput): UserAuth
    login(UserDetails: LoginInput): UserAuth
    updateUser(UserDetails: UpdateInput): User
    deleteUser(UserDetails: DeleteInput): UserConnection
  }
`;

module.exports = {
  userQueryMutation: userQueryMutation,
};

// extend type Query {
//   user(id: ID!): User
//   users(pageNo: Int, pageSize: Int, search: String): UserConnection
// }
