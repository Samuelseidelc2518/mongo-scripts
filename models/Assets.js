const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    nftId: {
        type: String,
    },
    owner: {
        type: String,
    },
    lastOwner: {
        type: String,
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    asset_url: {
        type: String,
    },
    unitName: {
        type: String,
    },
    price: {
        type: String,
    },
    tx: {
        type: String,
    },
    assetID: {
        type: Number,
    },
    timestamp: {
        type: Date,
    },
})

module.exports = mongoose.model("Asset", Schema)

/*
{
    nftId: '507025936',
    owner: '42BCDEA4OBARZQNQM6U4CDPX2AYKEWOOE4J5XONOWGLT6WKSCM3XMAG344',
    lastOwner: '7WE3HVHVLNTBWHAJX7RZQPY5YW3NS4PVUF3DFP6EALRDFEYE7A4ME2EBDI',
    name: 'My Algo Caveman 001',
    image: 'https://ipfs.io/ipfs/bafybeich5coqkcxm4ydtazo5xxjxnfyhoitq4g4o7nhkqxluzjlllswhji#i',
    asset_url: 'https://www.nftexplorer.app/asset/507025936',
    unitName: 'Caveman1',
    assetID: 507025936,
    timestamp: Date.now(),
    price: 'Transfer',
    tx: 'WXUKSPMMUGS54YWVS5DCN3FP5ZRXT7ZT4XWGEBOEHJOIL2A4MX6Q'
}
*/