"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const database_connection_1 = require("../migrations-utils/database-connection");
const up = async () => {
    const db = await (0, database_connection_1.getDb)();
};
exports.up = up;
const down = async () => {
    const db = await (0, database_connection_1.getDb)();
};
exports.down = down;
//# sourceMappingURL=template.js.map