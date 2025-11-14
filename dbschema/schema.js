const mongoose = require("mongoose");

const UserData = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})


let blog = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    }
})

let User = mongoose.model("userSignupData", UserData);
let blogs = mongoose.model("blogs", blog)
module.exports = { User, blogs };