import expres from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDef from './schema';
import resolver from './resolver';

const app = express();

app.use('/', bodyParser.json(), graphqlExpress({ graphqlSchema: schema }))

app.listen(8080)