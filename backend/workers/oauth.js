const express = require("express")
const app = express.Router();

app.delete("/account/api/oauth/sessions/kill/*", (req, res) => res.status(204).end())

app.get("/account/api/oauth/verify", (req, res) => {
    res.json({
        "token": "mptesting",
        "session_id": "3c3662bcb661d6de679c636744c66b62",
        "token_type": "bearer",
        "client_id": "mptesting",
        "internal_client": true,
        "client_service": "fortnite",
        "account_id": "mptesting",
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "auth_method": "exchange_code",
        "display_name": req.mptesting,
        "app": "fortnite",
        "in_app_id": "mptesting",
        "device_id": "mptesting"
    })
    res.status(204).end()
})

app.all("/account/api/oauth/token", (req, res) => {
    var displayName = "";

    if (req.body.username == undefined || !req.body.username) {
       displayName = "Alo";
    }else{
        if (req.body.username.includes("@")) {
            displayName = req.body.username.split("@")[0]
        }else{
            displayName = req.body.username;
        }
    }
    res.json({
        access_token: displayName + "EWNAHKID",
        expires_in: 28800,
        expires_at: "9999-12-31T23:59:59.999Z",
        token_type: "bearer",
        account_id: displayName,
        client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
        internal_client: true,
        client_service: "fortnite",
        displayName: displayName,
        app: "fortnite",
        in_app_id: displayName,
        device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
    });
})
module.exports = app