import expres from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

app.use('/', bodyParser.json(), graphqlExpress({ graphqlSchema: schema }))

app.listen(8080)