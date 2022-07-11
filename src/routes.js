import { Router } from "express";
import * as MessageControler from './controllers/messageController.js'

const routes = Router();

routes.get('/', (request, response) => {
  response.send('Working with API and in NodeJS');
});

routes.post('/message', MessageControler.message)

export default routes;