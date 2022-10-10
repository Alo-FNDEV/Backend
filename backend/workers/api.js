const express = require("express")
const app = express.Router();

app.get("/account/api/public/account/:accountId", async (req, res) => {
    res.json({
        "id": req.params.accountId,
        "displayName": req.params.accountId,
        "name": req.params.accountId,
        "email": req.params.accountId,
        "failedLoginAttempts": 0,
        "lastLogin": new Date().toISOString(),
        "numberOfDisplayNameChanges": 0,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "US",
        "lastName": "User",
        "preferredLanguage": "en",
        "canUpdateDisplayName": false,
        "tfaEnabled": false,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "UNKNOWN"
    })
})

app.get("/account/api/public/account", async (req, res) => {
    res.json(
        [{
            "id": req.query.accountId,
            "displayName": req.query.accountId,
            "externalAuths": {}
        },]
    )
})

app.post("/fortnite/api/game/v2/grant_access/*", (req, res) => {
    res.json({}).status(204).end();
})

app.get("/account/api/public/account/:accountId/externalAuths", (req, res) => res.json([]))
app.get("/api/v1/events/Fortnite/download/*", async (req, res) => res.json({}))

app.all('/fortnite/api/game/v2/tryPlayOnPlatform/account/*', (req, res) => {
    res.setHeader('Content-Type', 'text/plain').send(true).end();
})

app.get("/fortnite/api/v2/versioncheck/*", (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})

app.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
    res.json([])
})

app.get("/account/api/epicdomains/ssodomains", (req, res) => {
    res.json([
        "unrealengine.com",
        "unrealtournament.com",
        "fortnite.com",
        "epicgames.com"
    ])
})

app.get("/launcher/api/public/distributionpoints/", (req, res) => {
    res.json({
        "distributions": [
            "https://epicgames-download1.akamaized.net/",
            "https://download.epicgames.com/",
            "https://download2.epicgames.com/",
            "https://download3.epicgames.com/",
            "https://download4.epicgames.com/",
            "https://fastly-download.epicgames.com/"
        ]
    });
})

app.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
    // when your lazy
    res.json(require("../resources/json/keychain.json"))
    res.status(200);
})

module.exports = app