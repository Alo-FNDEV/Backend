import express from "express"
const app = express.Router();

app.all("/fortnite/api/game/v2/profile/:accountId/*/:command", (req, res) => {
    const profileID = req.query.profileId;
    const rvn = req.params.command;
    var retJSON = {
        profileRevision: rvn + 1 || 1,
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