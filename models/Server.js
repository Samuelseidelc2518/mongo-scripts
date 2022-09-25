const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    channel: {
        type: String,
    },
    trackings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tracking'
    }],
    serverId: {
        type: String,
    }
})

module.exports = mongoose.model("Server", Schema)