const express = require("express")

const postModal = require("./post-modal")

const router = express.Router()


// let likes = Math.floor(Math.random() * 99 + 100)
router.post("/add",(req,res)=>{
    postModal.create({  name: req.body.name,
                        location: req.body.location,
                        likes:req.body.likes,
                        description: req.body.description,
                        postImage: req.body.postImage,
                        date:req.body.date})
                        .then(()=>{
                            res.status(200).send("post created successfully")
                        })
                        

})

// let time = new Date().getTime()
router.get("/posts",(req,res)=>{
    postModal.find().sort({date:-1}).then((data)=>{
        res.status(200).send(data)
        // console.log(data)
        // console.log(time,likes)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports = router;