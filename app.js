const express=require('express');
const app=express();
//const port = 5000;

const appStudent = require("./applications/student");
const appBorrow = require("./applications/borrow");
const appBook = require("./applications/book");
const appAuthor = require("./applications/author");

app.use("/student",appStudent);
app.use("/borrow",appBorrow);
app.use("/book",appBook);
app.use("/author",appAuthor);

app.get("/", (req,res) => res.send("Hello"));
app.listen(process.env.PORT || 5000);