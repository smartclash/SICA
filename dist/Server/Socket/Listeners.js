"use strict";
exports.__esModule = true;
var Disconnected_1 = require("./Listeners/Disconnected");
var Messages_1 = require("./Listeners/Messages");
var Listener = /** @class */ (function () {
    function Listener(io) {
        this.io = io;
    }
    Listener.prototype.bootstrap = function () {
        var _this = this;
        this.io.on('connection', function (socket) {
            console.log('A new client connected');
            Disconnected_1["default"](socket);
            Messages_1["default"](socket, _this.io);
        });
    };
    return Listener;
}());
exports["default"] = Listener;
