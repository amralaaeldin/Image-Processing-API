"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkParams(req, res, next) {
    if (!req.query.filename)
        return res
            .status(422)
            .send('Unprocessable Entity: missing filename url query param');
    next();
}
exports.default = checkParams;
