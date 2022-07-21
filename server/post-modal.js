

const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: String,
    location : String,
    likes :{
        type:Number,
        default:30
    },
    description : String,
    postImage : {
        type:String,
        default:"nature.png"
    },
    date :Date
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;