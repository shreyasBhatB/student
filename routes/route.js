const express=require("express");
const router=express.Router();

const StudentController=require("../controller/studentController")

router.post("/register",StudentController.createStudent)

module.exports=router;
