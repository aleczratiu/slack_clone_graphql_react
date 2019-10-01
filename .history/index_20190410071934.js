import expres from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { express } from 'e'
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolver';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express();

app.use('/', bodyParser.json(), graphqlExpress({ schema }))

app.listen(8080)