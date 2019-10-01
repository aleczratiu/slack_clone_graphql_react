import expres from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolver';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/', bodyParser.json())

const graphqlEndpoint = '/graphql';

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.use('/graphiql', graphiqlExpress({ endpointUrl: graphqlEndpoint }));

app.listen(8080)