const mongoose = require('mongoose');

const dbConnector = require('./app/config/db.config.js');
const Pixls = require('./app/database/seeders/pixls.seeder');

const mongoURL = dbConnector.url;

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = {
    Pixls,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();
