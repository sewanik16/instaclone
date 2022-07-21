const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.listen(5000,()=>{
    console.log("server started at post:5000")
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())

mongoose.connect("mongodb://localhost/instaclone",()=>{
    console.log("connected to database")
})

app.get("/",(req,res)=>{
    console.log("welcome to instaclone") 
})

// middleware
app.use("/post",postController)