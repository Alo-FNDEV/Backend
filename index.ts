import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || require("./config.json").port, () => console.log(`Welcome to Alos Backend:\n-> Servers are Online on port: ${process.env.PORT || require("./config.json").port}`))
require("./backend/services/grabby").grabby(app)