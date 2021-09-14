import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
// import TYPES from './constants/types';
// import './controller/home';
import './controllers/test';

// load everything needed to the Container
const container = new Container();
// container.bind<UserService>(TYPES.UserService).to(UserService);

// start the server
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');
