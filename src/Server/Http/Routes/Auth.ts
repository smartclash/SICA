import { Router } from 'express';
import { showLoginForm, handleLoginForm } from '../Controllers/LoginController';
import { showRegisterForm, handleRegisterForm } from '../Controllers/RegisterController';

const auth: Router = Router();

auth.get('/login', showLoginForm);
auth.get('/register', showRegisterForm);

auth.post('/login', handleLoginForm);
auth.post('/register', handleRegisterForm);

export default auth;
