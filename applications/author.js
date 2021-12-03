require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const mongoose=require("mongoose");
const authorModel = require("../models/author");
const studModel=require("../models/author");

//MongoDB connection String
mongoose.connect(process.env.mongourl)
.then(() => console.log("MongoDB Connected."));

//Add author
app.post("/add",async(req,res) => {
    const {newauthor} = req.body;
    studModel.create(newauthor);
    res.json({data: "Author Added."});
})

// Get All Authors
app.get("/list",async(req,res) => {
    const alist=await authorModel.find();
    if(alist.length==null)
    {
        res.json({data : "No Authors Found."});
    }
    res.json({data : alist});
});

//Delete Author
app.delete("/delete/:id",async(req,res) => {
    const id=req.params.id;
    await authorModel.findOneAndDelete({AuthorId : id});
    res.json({data : "Author Deleted."});
});
module.exports=app;