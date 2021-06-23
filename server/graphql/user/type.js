import { gql } from 'apollo-server-express';

const userType = gql`
  type User {
    id: Int
    userName: String
    firstName: String!
    lastName: String!
    email: String!
    isActive: Boolean
    dob: String
    gender: String
    avatar: String
    otp: String
  }
  type UserConnection {
    count: Int
    users: [User]
  }

  type UserAuth {
    token: String
    user: User
  }
`;

export default userType;
