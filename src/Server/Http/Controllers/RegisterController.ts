import { Request, Response } from 'express';

const showRegisterForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/register',
        method: req.method
    });
};

const handleRegisterForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/register',
        method: req.method
    });
};

export { showRegisterForm, handleRegisterForm };
