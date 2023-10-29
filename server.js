
console.log("Hello shreyas")

const express=require("express");
const mongoose=require("mongoose");
const  app=express();
const router=require("./routes/route");

app.use(express.json());
app.use("/",router);

//DB connection
mongoose
.connect("mongodb+srv://shreyasbhatbidara11:shreyas11@cluster0.hu5vlps.mongodb.net/")
.then(()=>{
console.log("DB connected");
})
.catch((err) =>{
    console.log(err,"Something went wrong");
});

app.get("/test", (req,res)=>{
    res.send("Beluga")
});



app.listen(3500,()=>{
    console.log("Server is connected")
});