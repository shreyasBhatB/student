const mongoose=require("mongoose");

let courseSchema=new mongoose.Schema({
    Course_Name:{
        type:String,
        required:true
    },
    Course_Duration:{
        type:String,
        required:true
    },
    Course_Code:{
        type:String,
        required:true,
        unique:true,}
},{timestamps:true});

module.exports =new mongoose.model("Course",courseSchema);