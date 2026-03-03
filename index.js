import express from "express";
import {config} from "dotenv";
config()
const PORT=process.env.PORT || 3001;
const app=express();

app.use((req,res,next)=>{
    console.log('Sorov keldi ');
    next()
})


app.get("/", (req,res)=>{
    res.send("Saloom")
}) 

app.listen(PORT, ()=>{
    console.log(`${PORT} is running ...`)
})