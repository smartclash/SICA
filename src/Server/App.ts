import * as Twig from 'twig';
import { Server } from 'http';
import * as express from 'express';
import * as socket from 'socket.io';

import Web from './Routes/Web';

const app: express.Express = express();

export const http = new Server(app);
export const io = socket(http);

app.set('twig options', {
    allow_async: true
});

app.use(Web);
