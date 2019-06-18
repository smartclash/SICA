import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { isEmail, isAlphanumeric } from 'validator';

import User from './../../../Database/Models/User';

const showRegisterForm = (req: Request, res: Response) => {
    return res.render('Auth/Register');
};

const handleRegisterForm = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (! isEmail(email) && ! isAlphanumeric(username)) {
        return res.json({
            email: 'wrong',
            username: 'wrong',
        });
    }

    const hashedPassword = await hash(password, 10);

    const checkEmail = await User.findOne({ email });
    const checkUsername = await User.findOne({ username });

    if (checkEmail) {
        return res.render('Auth/Register.twig', {
            'email': 'This email already exists'
        });
    }
    
    if (checkUsername) {
        return res.render('Auth/Register.twig', {
            'username': 'This username is already used'
        });
    }

    new User({ username, email, password: hashedPassword }).save();
    return res.redirect('/auth/login');
};

export { showRegisterForm, handleRegisterForm };
