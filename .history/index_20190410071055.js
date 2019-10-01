import expres from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';

const app = express();

app.use('/', bodyParser.json(), graphqlExpress)

app.listen(8080)