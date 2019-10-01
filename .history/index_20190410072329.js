import expres from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, graphiqlExpress } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolver';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express();

const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointUrl: graphqlEndpoint }));

app.listen(8080)