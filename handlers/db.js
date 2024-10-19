const Keyv = require('keyv');
const db = new Keyv('sqlite://NytroxDaemon.db');

module.exports = { db }