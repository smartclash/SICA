"use strict";
exports.__esModule = true;
var path_1 = require("path");
var http_1 = require("http");
var express = require("express");
var socket = require("socket.io");
var flash = require("connect-flash");
var session = require("express-session");
var User_1 = require("./Http/Routes/User");
var Auth_1 = require("./Http/Routes/Auth");
var Listeners_1 = require("./Socket/Listeners");
var Passport_1 = require("./Passport/Passport");
var OnlyUsers_1 = require("./Http/Middleware/OnlyUsers");
var OnlyGuests_1 = require("./Http/Middleware/OnlyGuests");
var app = express();
exports.http = new http_1.Server(app);
exports.io = socket(exports.http);
app.set('views', path_1.join(__dirname, '../../src/Resources/Views'));
app.set('view engine', 'twig');
app.set('twig options', {
    allow_async: true
});
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'dQ4mZCx7HkkjHV4zxJcksuPjDciImrJC',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(Passport_1["default"].initialize());
app.use(Passport_1["default"].session());
app.use('/user', OnlyUsers_1["default"], User_1["default"]);
app.use('/auth', OnlyGuests_1["default"], Auth_1["default"]);
new Listeners_1["default"](exports.io).bootstrap();
