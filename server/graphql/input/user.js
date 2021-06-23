import { gql } from 'apollo-server-express';

const userInput = gql`
  input PresonalAddress {
    address: String
    country: String
    state: String
    postal_code: Int
    type: String
  }
  input BillingAddress {
    address: String
    country: String
    state: String
    postal_code: Int
    type: String
  }
`;

export default userInput;
