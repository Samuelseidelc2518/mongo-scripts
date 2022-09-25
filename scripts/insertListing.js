
const holders = JSON.parse(fs.readFileSync("./data/listing.json", "utf8"));

const keys = Object.keys(holders)


const servers = keys.map(async key => {
    const { channel, tracking } = holders[key]

    const newServer = await Server.create({
        channel,
        serverId: key,
    })

    Object.keys(tracking).map(async key => {
        const { channel, assets } = tracking[key]

        const arrayOfAssets = Object.keys(assets).map(key => ({ ...assets[key], nftId: key }))

        const assetsInserted = await Asset.insertMany(arrayOfAssets)

        if( channel ) {
            const trackingInserted = await Tracking.create({
                channel,
                assets: assetsInserted.map(el => el._id)
            })
            const serverWithTheNewTracking = await newServer.update({ $push: { trackings: trackingInserted._id } })
            return { channel, walletId: key, assets: arrayOfAssets, _id: trackingInserted._id }
        }
        const trackingInserted = await Tracking.create({
            assets: assetsInserted.map(el => el._id)
        })
        const serverWithTheNewTracking = await newServer.update({ $push: { trackings: trackingInserted._id } })
        return { walletId: key, assets: arrayOfAssets, _id: trackingInserted._id }
    })

    return newServer
})