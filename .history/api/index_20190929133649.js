import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

export const schema = makeExecutableSche~ma({
    typeDefs,
    resolvers,
});

const app = express();

const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync(() => {
    app.listen(8081);
});
