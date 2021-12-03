require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const mongoose=require("mongoose");
const bookModel = require("../models/book");
const studModel=require("../models/book");

//MongoDB connection String
mongoose.connect(process.env.mongourl)
.then(() => console.log("MongoDB Connected."));

//Add Books
app.post("/add",async(req,res) => {
    const {newbook} = req.body;
    studModel.create(newbook);
    res.json({data: "Book Added."});
})

// Get All Books
app.get("/list",async(req,res) => {
    const booklist=await bookModel.find();
    if(booklist.length==null)
    {
        res.json({data : "No Books Found."});
    }
    res.json({data : booklist});
});

//Delete Book
app.delete("/delete/:id",async(req,res) => {
    const id=req.params.id;
    await bookModel.findOneAndDelete({BookId : id});
    res.json({data : "Book Deleted."});
});
module.exports=app;