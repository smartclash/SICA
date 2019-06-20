import { Router } from 'express';

const user: Router = Router();

user.get('/', (req, res) => {
    res.render('User/Main.twig', {
        name: req.user.username
    });
});
user.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth/login');
});

export default user;
