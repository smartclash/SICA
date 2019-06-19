"use strict";
exports.__esModule = true;
var showLoginForm = function (req, res) {
    return res.render('Auth/Login.twig', {
        //@ts-ignore
        error: req.flash('error')[0]
    });
};
exports.showLoginForm = showLoginForm;
