"use strict";
exports.__esModule = true;
var onlyUsers = function (req, res, next) {
    if (req.user)
        return next();
    return res.redirect('/auth/login');
};
exports["default"] = onlyUsers;
