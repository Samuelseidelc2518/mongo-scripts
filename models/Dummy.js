const mongoose = require("mongoose")

const Schema = new mongoose.Schema({}, { strict: false, collection: 'dao-bot' })

module.exports = mongoose.model("dao-bot", Schema)