const express =require('express')
const app=express()
const PORT=1001

const customMiddleware=(req,res,next)=>{
    console.log("MiddleWare is Running Now")
    next()
}

app.get('/',(req,res)=>{
    console.log("Home")
    res.send("Hello Baby")
})

app.get('/aboutus',customMiddleware,(req, res) => {
    console.log("About")
    res.send("About us Page")
})

app.listen(PORT,()=>{
    console.log("Server is Running Now")
})