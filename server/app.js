import express from "express"
const app=express();
app.use(express.json())
const PORT=7001;
app.get("/",(req,res)=>{
    res.send("Hello Server");
});
app.get("/global",(req,res)=>{
    res.send("Hello Global Server");
});
app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
    res.json(userData)
});
app.listen(PORT,()=>{
    console.log(`Server is Running at http:/localhost:${PORT}`);
});