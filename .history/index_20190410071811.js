import expres from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDef from './schema';
import resolver from './resolver';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express();

app.use('/', bodyParser.json(), graphqlExpress({ schema }))

app.listen(8080)