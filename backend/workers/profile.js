const express = require("express")
const app = express.Router();

app.all("/fortnite/api/game/v2/profile/:accountId/*/:command", (req, res) => {
    const profileID = req.query.profileId;
    var retJSON = {
        profileRevision: rvn + 1,
        profileId: profileID,
        profileChangesBaseRevision: 1,
        profileChanges: [],
        profileCommandRevision: 1,
        serverTime: new Date(),
        responseVersion: 1
    }
    res.json(retJSON)
})
module.exports = app