"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Routes_1 = __importDefault(require("./Routes"));
var app = (0, express_1.default)();
var port = 7000;
app.use('/', Routes_1.default);
app.listen(port, function () {
    console.log("Running on ".concat(port, "..."));
});
exports.default = app;
