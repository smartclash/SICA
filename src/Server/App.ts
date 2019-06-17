import * as Twig from 'twig';
import { Server } from 'http';
import * as express from 'express';
import * as socket from 'socket.io';
import * as session from 'express-session';

import Web from './Http/Routes/User';
import Auth from './Http/Routes/Auth';
import onlyUsers from './Http/Middleware/OnlyUsers';
import onlyGuests from './Http/Middleware/OnlyGuests';

const app: express.Express = express();

export const http = new Server(app);
export const io = socket(http);

app.use(session({
    secret: 'dQ4mZCx7HkkjHV4zxJcksuPjDciImrJC',
    resave: false,
    saveUninitialized: true
}));
app.set('twig options', {
    allow_async: true
});

app.use('/user', onlyUsers, Web);
app.use('/auth', onlyGuests, Auth);
