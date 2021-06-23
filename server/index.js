import express from 'express';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/combinedTypes';
import resolvers from './graphql/combinedResolvers';
import models from './models';
import { port } from './config';
import { nonAuthUrl } from './utils';
import { auth } from './middleware/is-auth';
//import morgan from 'morgan';

import CapitalizeDirective, {
  FormattableDateDirective,
} from './graphql/directives';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    capitalize: CapitalizeDirective,
    date: FormattableDateDirective,
  },
  formatError: (error) => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      // ...error, // uncomment this if you want to receive internal errors
      message,
    };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }
    return {
      authScope: await auth(req),
      models,
    };
  },
  subscriptions: {
    onConnect: () => console.log('Connected to websocket....../n'),
  },
  tracing: true,
  uploads: {
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20,
  },
});
const app = express();
//app.use(morgan('tiny'));
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
models.sequelize.authenticate();
models.sequelize.sync();
const service = httpServer.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
  console.log(
    `🚀 Subscriptions ready at ws://192.168.0.118:${port}${server.subscriptionsPath}`,
  );
});
const io = require('socket.io')(service, {
  cors: {
    allRoutes: true,
    allowOrigins: '*',
    allowCredentials: false,
  },
});

io.on('connection', (socket) => {
  console.log(`new connection-------------- ${socket.id}`);
  socket.on('message', (data) => {
    io.sockets.emit('message', data);
  });
  socket.on('muteAll', (data) => {
    io.sockets.emit('muteAll', data);
  });
  socket.on('disconnectAll', (data) => {
    io.sockets.emit('disconnectAll', data);
  });
});
