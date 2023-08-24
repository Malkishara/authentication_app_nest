"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = void 0;
const mongodb_1 = require("mongodb");
const getDb = async () => {
    const client = await mongodb_1.MongoClient.connect('mongodb://localhost/mongodb');
    return client.db();
};
exports.getDb = getDb;
//# sourceMappingURL=database-connection.js.map