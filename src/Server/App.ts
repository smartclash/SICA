import { join } from 'path';
import { Server } from 'http';
import * as express from 'express';
import * as socket from 'socket.io';
import * as flash from 'connect-flash';
import * as session from 'express-session';

import Web from './Http/Routes/User';
import Auth from './Http/Routes/Auth';
import Global from './Http/Routes/Global';
import WebSocket from './Socket/WebSocket';
import passport from './Passport/Passport';
import onlyUsers from './Http/Middleware/OnlyUsers';
import onlyGuests from './Http/Middleware/OnlyGuests';

const app: express.Express = express();

export const http = new Server(app);
export const io = socket(http);

app.set('views', join(__dirname, '../../src/Resources/Views'));
app.set('view engine', 'twig');
app.set('twig options', {
    allow_async: true
});

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'dQ4mZCx7HkkjHV4zxJcksuPjDciImrJC',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', Global);
app.use('/user', onlyUsers, Web);
app.use('/auth', onlyGuests, Auth);

new WebSocket(io).bootstrap();
