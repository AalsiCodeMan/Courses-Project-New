const express =require('express')
const app=express()
const PORT=1001

app.get('/',(req,res)=>{
    res.send("Hello Baby")
})

app.listen(PORT,()=>{
    console.log("Server is Running Now")
})