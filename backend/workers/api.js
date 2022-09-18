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

app.get("/account/api/public/account/:accountId/externalAuths", (req, res) => res.json([]))

app.get("/account/api/epicdomains/ssodomains", (req, res) => {
    res.json([
        "unrealengine.com",
        "unrealtournament.com",
        "fortnite.com",
        "epicgames.com"
    ])
})

app.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
    // when your lazy
    res.json(require("../resources/json/keychain.json"))
    res.status(200);
})

module.exports = app