import { Router, Request, Response } from 'express';

const global: Router = Router();

global.get('/', (req: Request, res: Response) => res.redirect('/auth/login'));

export default global;
