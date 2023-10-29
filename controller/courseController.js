const courseModel=require("../Models/courseModel")

let createcourse = async (req,res)=>{
        try {
            let data =req.body
            let register=await courseModel.create(data)
            return res.status(201)
            .send({
                status:"true",
                msg:"Course registerd successfully",
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
module.exports={createcourse}