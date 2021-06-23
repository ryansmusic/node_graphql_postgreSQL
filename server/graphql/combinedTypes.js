// @flow
import { gql } from 'apollo-server-express';
import { userQueryMutation } from './user/OueryMutation';
//import meetingTypes from './meeting/types';

// const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql');

const queryTypes = gql`
  scalar Date

  directive @capitalize on FIELD_DEFINITION
  directive @date(defaultFormat: String = "MMMM Do YYYY") on FIELD_DEFINITION

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const combinedTypes = [userQueryMutation, queryTypes];

export default combinedTypes;
