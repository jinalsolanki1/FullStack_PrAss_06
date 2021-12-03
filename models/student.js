const mongoose=require("mongoose");
const studtbl=mongoose.Schema(
    {
        StudentId : String,
        SName : String,
    }
);
const studModel=mongoose.model("tblstud",studtbl,"tblstud");
module.exports=studModel;