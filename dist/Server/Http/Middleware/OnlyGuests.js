"use strict";
exports.__esModule = true;
var onlyGuests = function (req, res, next) {
    if (req.user)
        return res.redirect('/user/');
    return next();
};
exports["default"] = onlyGuests;
