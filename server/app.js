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
app.post("/students/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id)
    res.json(id)
});
app.post("/colleges/:collegename",(req,res)=>{
    let colleges = req.params.collegename;
    console.log(colleges)
    res.json(colleges)
});
app.get("/link",(req,res)=>{
    try {
        res.redirect("https://google.com")
    } catch (error) {
        console.log(error)
    }
});
app.get("/abc/:connect",(req,res)=>{
    try {
        let abc=req.params.connect;
        res.redirect(`https://${abc}.com`);
    } catch (error) {
        console.log(error)
    }
});
app.get("/download",(req,res)=>{
    try {
       res.download("./image.jpg")
    } catch (error) {
        console.log(error)
    }
});
app.listen(PORT,()=>{
    console.log(`Server is Running at http:/localhost:${PORT}`);
});