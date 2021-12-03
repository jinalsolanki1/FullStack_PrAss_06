require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const mongoose=require("mongoose");
const studModel=require("../models/student");
app.get("/", (req,res) => res.send("API Of Student"));

//MongoDB connection String
mongoose.connect(process.env.mongourl)
.then(() => console.log("MongoDB Connected."));

//Add Student
app.post("/add",async(req,res) => {
    const {newstud} = req.body;
    studModel.create(newstud);
    res.json({data: "Student Added."});
});

//Get All Student
app.get("/list", async(req,res) => {
    const studlist = await studModel.find();
    if(studlist.length==null)
    {
        res.json({data : "No Student Found."});
    }
    res.json({data : studlist});
});

//Delete Student
app.delete("/delete/:id",async(req,res) => {
    const id=req.params.id;
    await studModel.findOneAndDelete({StudentId : id});
    res.json({data : "Student Deleted."});
});
module.exports=app;