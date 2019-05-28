import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

import routers from './routes/index';
import apiDocs from '../swagger.json';

const app = express();

app.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  compression(),
  helmet(),
);

app.use('/docs', swagger.serve, swagger.setup(apiDocs));
app.use('/', routers);

app.listen(6000, () => {
  console.log('express server port on 6000');
});
