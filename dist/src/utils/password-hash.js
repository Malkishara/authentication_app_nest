"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHashPassword = exports.generateHashPassword = void 0;
const bcrypt = require("bcrypt");
const generateHashPassword = (password) => {
    const saltOrRounds = 10;
    const hash = bcrypt.hashSync(password, saltOrRounds);
    return hash;
};
exports.generateHashPassword = generateHashPassword;
const compareHashPassword = (password, hash) => {
    const isMatch = bcrypt.compareSync(password, hash);
    return isMatch;
};
exports.compareHashPassword = compareHashPassword;
//# sourceMappingURL=password-hash.js.map