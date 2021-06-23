// @flow
import dotenv from 'dotenv';

dotenv.config();

// Database Settings
export const jwtSecret = process.env.JWT_SECRET || 'awesome_secret';
export const jwtExpireIn = process.env.JWT_EXPIRE_IN || '1d';
export const accountSid = 'AC753536f792e005c61f29e45d765727d8';
export const authToken = '00331fc6cee1f98528ed0cfde453ab0f';
export const number = '+13312562951';
export const DATABASE_NAME = process.env.DATABASE_NAME || 'stories';
export const TEST_DATABASE_NAME = process.env.TEST_DATABASE_NAME || 'stories';
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'stories';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'stories';

export const port = process.env.PORT || 4000;
