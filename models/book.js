const mongoose = require("mongoose");
const booktbl=(
    {
        BookId : String,
        BName : String,
        AuthorId : String,
    }
);
const bookModel= mongoose.model("tblbook",booktbl,"tblbook");
module.exports=bookModel;