import { Router } from 'express';

const web: Router = Router();

web.get('/', (req, res) => {
    res.render('User/Main.twig', {
        name: req.user.username
    });
});

export default web;
