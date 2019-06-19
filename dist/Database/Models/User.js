"use strict";
exports.__esModule = true;
var DB_1 = require("./../DB");
var usersSchema = new DB_1["default"].Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
var User = DB_1["default"].model('User', usersSchema);
exports["default"] = User;
