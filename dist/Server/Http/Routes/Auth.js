"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Passport_1 = require("./../../Passport/Passport");
var LoginController_1 = require("../Controllers/LoginController");
var RegisterController_1 = require("../Controllers/RegisterController");
var auth = express_1.Router();
auth.get('/login', LoginController_1.showLoginForm);
auth.get('/register', RegisterController_1.showRegisterForm);
auth.post('/login', Passport_1["default"].authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
}));
auth.post('/register', RegisterController_1.handleRegisterForm);
exports["default"] = auth;
