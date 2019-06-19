"use strict";
exports.__esModule = true;
var express_1 = require("express");
var web = express_1.Router();
web.get('/', function (req, res) {
    res.render('User/Main.twig', {
        name: req.user.username
    });
});
exports["default"] = web;
