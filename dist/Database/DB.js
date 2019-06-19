"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alphaman:passwordROFL1@ds161148.mlab.com:61148/smartstats', { useNewUrlParser: true });
exports["default"] = mongoose;
