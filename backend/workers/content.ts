import express from "express"
const app = express.Router();

app.get(["/content/api/pages/fortnite-game", "/content/app/pages/"], (req, res) => {
    var season = "0";
    var useragent = req.headers["user-agent"];

    if (useragent) {
        try{
            season = useragent.split("-")[1].split(".")[0]
        }catch{
            season = "default"
        }
    }else{
        season = "default"
    }
    res.json({
        "jcr:isCheckedOut": true,
        "_title": "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        "_activeDate": "2017-08-30T03:20:48.050Z",
        "lastModified": new Date(),
        "_locale": "en-US",
        "dynamicbackgrounds": {
            "backgrounds": {
                "backgrounds": [
                    {
                        "backgroundimage": "https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg",
                        "stage": `season${season}`,
                        "_type": "DynamicBackground",
                        "key": "lobby"
                    },
                    {
                        "backgroundimage": "https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg",
                        "stage": `season${season}`,
                        "_type": "DynamicBackground",
                        "key": "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            "_title": "dynamicbackgrounds",
            "_noIndex": false,
            "_activeDate": "2022-09-16T23:45:00.000Z",
            "lastModified": "2022-09-18T06:08:04.624Z",
            "_locale": "en-US",
            "_templateName": "FortniteGameDynamicBackgrounds"
        },
        "emergencynotice": {
            "news": {
                "platform_messages": [],
                "_type": 'Battle Royale News',
                "messages": [
                    {
                        "hidden": false,
                        "_type": 'CommonUI Simple Message Base',
                        "subgame": 'br',
                        "title": "Welcome to alo",
                        "body": "There are a few issues atm",
                        "spotlight": true
                    }
                ]
            },
            "_title": 'emergencynotice',
            "_activeDate": new Date().toISOString(),
            "lastModified": new Date().toISOString(),
            "_locale": 'en-US'
        },
        "emergencynoticev2": {
            "news": {
                "platform_messages": [],
                "_type": "Battle Royale News",
                "messages": [
                    {
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "subgame": "br",
                        "title": "Welcome to alo",
                        "body": "There are a few issues atm",
                        "spotlight": true
                    }
                ]
            },
            "_title": "emergencynotice",
            "_activeDate": new Date(),
            "lastModified": new Date(),
            "_locale": "en-US"
        },
    })
})

module.exports = app;