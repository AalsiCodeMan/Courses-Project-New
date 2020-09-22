const express =require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=1001
const{MONGOURI}=require('./keys')
//Name-AalsiDevil  , Pass-XOHlAlOnTiyfSFau

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to The Data BAse")
})

mongoose.connection.on('error', (err) => {
    console.log("Error in connecting",err)
})

app.listen(PORT,()=>{
    console.log("Server is Running Now")
})