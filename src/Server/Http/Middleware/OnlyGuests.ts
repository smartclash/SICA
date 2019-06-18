import { Request, Response, NextFunction } from 'express';

const onlyGuests = (req: Request, res: Response, next: NextFunction) => {
    if (req.user)
        return res.redirect('/user/');

    return next();
};

export default onlyGuests;
