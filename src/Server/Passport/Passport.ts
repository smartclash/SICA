import { compare } from 'bcrypt';
import * as passport from 'passport';
import { Strategy } from 'passport-local';

import User from '../../Database/Models/User';

passport.use(new Strategy((username, password, done) => {
    User.findOne({ username }, async (err, user) => {
        if (err) {
            return done(err);
        }

        if (! user) {
            return done(null, false, { message: 'The username does not exists' });
        }

        //@ts-ignore
        const passwordVerified = await compare(password, user.password);

        if (passwordVerified) {
            return done(null, user);
        }

        return done(null, false, { message: 'The password you entered is incorrect' });
    });
}));

passport.serializeUser((user, done) => {
    //@ts-ignore
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

export default passport;
