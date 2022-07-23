

const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: {
        type:String,
      
    },
    location : {
        type:String,
        
    },
    likes :{
        type:Number,
        default:30
    },
    description : {
        type:String,
        
    },
    postImage : {
        type:String,
        default:"nature.png",
     
    },
    date :Date
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;