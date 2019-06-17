import { Request, Response, NextFunction } from 'express';

const onlyUsers = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.loggedIn)
        return next();

    return res.redirect('/auth/login');
};

export default onlyUsers;
