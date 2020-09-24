const express =require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=1001
const{MONGOURI}=require('./keys')
//Name-AalsiDevil  , Pass-XOHlAlOnTiyfSFau

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

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT,()=>{
    console.log("Server is Running Now")
})