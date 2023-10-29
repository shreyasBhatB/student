const StudentModel=require("../Models/studentmodel")

let createStudent = async (req,res)=>{
        try {
            let data =req.body
            let register=await StudentModel.create(data)
            return res.status(201)
            .send({
                status:"true",
                msg:"Student registerd successfully",
                data:register
            });
            
        } catch (error) {
            return res
            .status(500)
            .send({
                status:"false",
                msg:"Server error"
        });
        }
};
module.exports={createStudent}