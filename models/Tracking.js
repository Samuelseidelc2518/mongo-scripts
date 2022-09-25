const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    channel: {
        type: String,
    },
    assets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset'
    }]
})

module.exports = mongoose.model("Tracking", Schema)