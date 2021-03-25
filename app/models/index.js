const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.pixls = require("./pixls.model.js")(mongoose);
db.pixls = require("./pixls.model.js")
module.exports = db;