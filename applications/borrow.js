require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const mongoose=require("mongoose");
const bookModel = require("../models/book");
const borrowModel = require("../models/borrow");
const studModel=require("../models/borrow");
app.get("/", (req,res) => res.send("API Of Borrow"));
//MongoDB connection String
mongoose.connect(process.env.mongourl)
.then(() => console.log("MongoDB Connected."));

//Add Borrows
app.post("/add",async(req,res) => {
    const {newborrow} = req.body;
    studModel.create(newborrow);
    res.json({data: "Borrow Added."});
})

// Get All Borrows
app.get("/list",async(req,res) => {
    const blist=await borrowModel.find();
    if(blist.length==null)
    {
        res.json({data : "No Borrows Found."});
    }
    res.json({data : blist});
});

////Delete Borrow
app.delete("/delete/:id",async(req,res) => {
    const id=req.params.id;
    await bookModel.findOneAndDelete({BorrowId : id});
    res.json({data : "Borrow Deleted."});
});
module.exports=app;