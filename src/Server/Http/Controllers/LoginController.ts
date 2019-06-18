import { Request, Response } from 'express';

const showLoginForm = (req: Request, res: Response) => {
    return res.render('Auth/Login.twig', {
        //@ts-ignore
        error: req.flash('error')[0]
    });
};

export { showLoginForm };
