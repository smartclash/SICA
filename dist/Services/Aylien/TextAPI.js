"use strict";
exports.__esModule = true;
var AYLIEN = require("aylien_textapi");
var textApi = new AYLIEN({
    application_id: 'f7cbfd42',
    application_key: '3a78d46a42732f957c09b745b8cd8360'
});
var checkSentiment = function (text) { return new Promise(function (resolve, reject) {
    textApi.sentiment({ text: text }, function (error, response) {
        if (error)
            return reject(error);
        resolve(response);
    });
}); };
exports["default"] = checkSentiment;
