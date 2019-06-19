"use strict";
exports.__esModule = true;
var disconnected = function (socket) {
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
};
exports["default"] = disconnected;
