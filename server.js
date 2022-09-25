const express = require("express")
const cors = require("cors")
const fs = require('fs')
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI);

const Asset = require("./models/Assets")
const Tracking = require("./models/Tracking")
const Server = require("./models/Server")

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    try {
        
        const servers = await Server.find({}).populate({ path: 'trackings', populate: { path: 'assets' } })

        res.send(servers)
    } catch (error) {
        res.send(error)
    }
})


app.listen(port, () => console.log(`Server listen on port: ${port}`))