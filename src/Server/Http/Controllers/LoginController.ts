import { Request, Response } from 'express';

const showLoginForm = (req: Request, res: Response) => {
    return res.render('Auth/Login.twig');
};

const handleLoginForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/login',
        method: req.method
    });
};

export { showLoginForm, handleLoginForm };
