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

module.exports = app