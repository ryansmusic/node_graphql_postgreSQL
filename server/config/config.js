module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password:'1234',
    database: process.env.DATABASE_NAME || 'OrgOne',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    logging: false,
  },
  // test: {
  //   username: process.env.DATABASE_USERNAME || 'stories',
  //   password: process.env.DATABASE_NAME || 'stories',
  //   database: process.env.TEST_DATABASE_NAME || 'stories_test',
  //   host: process.env.DATABASE_HOST || '127.0.0.1',
  //   port: process.env.DATABASE_PORT || 51244,
  //   dialect: process.env.DATABASE_DIALECT || 'postgres',
  // },
  // production: {
  //   username: process.env.DATABASE_USERNAME || 'stories',
  //   password: process.env.DATABASE_PASSWORD || 'stories',
  //   database: process.env.DATABASE_NAME || 'stories',
  //   host: process.env.DATABASE_HOST || '127.0.0.1',
  //   port: process.env.DATABASE_PORT || 51244,
  //   dialect: process.env.DATABASE_DIALECT || 'postgres',
  // },
};
