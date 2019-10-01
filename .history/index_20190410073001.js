import expres from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolver';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ schema });

const app = express();
app.use('/', bodyParser.json());

server.applyMiddleware({ app });

app.listen(8000)