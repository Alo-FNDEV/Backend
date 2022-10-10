const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express.Router();

app.get("/fortnite/api/cloudstorage/system", (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.json([{
        "uniqueFilename": "DefaultGame.ini",
        "filename": "DefaultGame.ini",
        "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
        "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
        "length": fs.readFileSync("./backend/resources/ini/DefaultGame.ini").length,
        "contentType": "text/plain",
        "uploaded": "9999-9999-9999",
        "storageType": "S3",
        "doNotCache": false
    },
    {
        "uniqueFilename": "DefaultEngine.ini",
        "filename": "DefaultEngine.ini",
        "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
        "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
        "length": fs.readFileSync("./backend/resources/ini/DefaultEngine.ini").length,
        "contentType": "text/plain",
        "uploaded": "9999-9999-9999",
        "storageType": "S3",
        "doNotCache": false
    }])
    res.status(200);
})

app.get("/fortnite/api/cloudstorage/system/:file", (req, res) => {
    const file = req.params.file;
    try {
        res.sendFile(path.join(__dirname, `../resources/ini/${file}`));
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(200);
    }
})

app.get("/fortnite/api/cloudstorage/system/config", (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.json([]);
    res.status(200);
})

app.all("/fortnite/api/cloudstorage/user/:accountId", (req, res) => {
    res.set("Content-Type", "application/json")
    res.json([])
})

app.put("/fortnite/api/cloudstorage/user/:accountId/:filename", (req, res) => {
    res.status(204).send()
})

module.exports = app;