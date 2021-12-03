const mongoose = require("mongoose");
const authortbl=(
    {
        AuthorId : String,
        AName : String,
    }
);
const authorModel= mongoose.model("tblauthor",authortbl,"tblauthor");
module.exports=authorModel;