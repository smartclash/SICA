import { Router } from 'express';

const web: Router = Router();

web.get('/', (req, res) => res.json({ hello: 'world' }));

export default web;
