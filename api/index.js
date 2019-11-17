import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import Sequelize from 'sequelize';

import models from './models';

const SECRET = 'ajskdbkamd';

const SECRET2 = 'sdfsdfsdfsdfsdf';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const app = express();

const graphqlEndpoint = '/graphql';

// app.use(
//   graphqlEndpoint,
//   bodyParser.json(),
//   graphqlExpress({
//     schema,
//     context: {
//       models,
//       user: {
//         id: 1,
//       },
//     },
//   }),
// );

const server = new ApolloServer({ typeDefs, resolvers, context: { models, user: { id: 1 }, SECRET, SECRET2 } });
server.applyMiddleware({ app });

models.sequelize.sync();
app.listen(8081);
