"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const password_hash_1 = require("../../src/utils/password-hash");
const database_connection_1 = require("../migrations-utils/database-connection");
const up = async () => {
    const db = await (0, database_connection_1.getDb)();
    await db.collection('user').insertOne({
        username: 'admin',
        password: (0, password_hash_1.generateHashPassword)('admin'),
    });
};
exports.up = up;
const down = async () => {
    const db = await (0, database_connection_1.getDb)();
};
exports.down = down;
//# sourceMappingURL=1692804567564-addinitialuser.js.map