const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || require("./config.json").port, () => console.log(`Welcome to Alos Backend:\n-> Servers are Online on port: ${process.env.PORT || require("./config.json").port}`))
require("./backend/services/grabby").grabby(app)