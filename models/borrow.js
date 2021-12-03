const mongoose = require("mongoose");
const borrowtbl=mongoose.Schema(
    {
        BorrowId : String,
        StudentId : String,
        BookId : String,
    }
);
const borrowModel = mongoose.model("tblborrow",borrowtbl,"tblborrow");
module.exports=borrowModel;