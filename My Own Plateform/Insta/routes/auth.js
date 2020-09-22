const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Hy Baby!")
})

router.post('./signup',(req,res)=>{
    const{name,email,password}=req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"Please Fill all the fields"})
    }
    res.json({message:"Seccessfully Posted"})
})

module.exports=router