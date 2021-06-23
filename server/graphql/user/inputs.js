import { gql } from 'apollo-server-express';

const userInput = gql`
  input RegisterInput {
    userName: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: String
    gender: String!
  }
  input LoginInput {
    userName: String
    email: String
    password: String!
  }
  input DeleteInput {
    id: Int!
  }
  input userGetInput {
    id: Int!
  }
  input UpdateInput {
    id: Int!
    firstName: String
    lastName: String
    email: String
    password: String
    dob: String
    gender: String
  }
`;

export default userInput;
