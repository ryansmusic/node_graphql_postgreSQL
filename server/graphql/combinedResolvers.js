import userResolvers from './user/resolvers';
//import meetingResolvers from './meeting/resolvers';
import { dateScalarType } from './scalars';

export default [dateScalarType, userResolvers];
