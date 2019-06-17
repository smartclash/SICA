import { Request, Response } from 'express';

const showLoginForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/login',
        method: req.method
    });
};

const handleLoginForm = (req: Request, res: Response) => {
    res.json({
        page: '/auth/login',
        method: req.method
    });
};

export { showLoginForm, handleLoginForm };
