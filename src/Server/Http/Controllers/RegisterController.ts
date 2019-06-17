import { Request, Response } from 'express';

const showRegisterForm = (req: Request, res: Response) => {
    return res.render('Auth/Register');
};

const handleRegisterForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/register',
        method: req.method
    });
};

export { showRegisterForm, handleRegisterForm };
