let express = require('express');
const cors = require('cors');
let path = require('path');
let jwt = require('jsonwebtoken')
let app = express();
const cookieParser = require("cookie-parser");
const route = require("./Router/route");
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
let PORT = 3000;
let mongoose = require('mongoose')

mongoose.connect("mongodb+srv://danishnazakat:LwkFe3qiBwUzl12H@cluster0.rpvrbpd.mongodb.net/?appName=Cluster0",
    {

    })

    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connectiong to mongoDB", err)
    })


// app.use("/api",roter );
app.use("/api", route);





app.listen(PORT, () => {
    console.log("server is running")
})


