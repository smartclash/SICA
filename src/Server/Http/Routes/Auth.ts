import { Router } from 'express';

import passport from './../../Passport/Passport';
import { showLoginForm } from '../Controllers/LoginController';
import { showRegisterForm, handleRegisterForm } from '../Controllers/RegisterController';

const auth: Router = Router();

auth.get('/login', showLoginForm);
auth.get('/register', showRegisterForm);

auth.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
}));
auth.post('/register', handleRegisterForm);

export default auth;
