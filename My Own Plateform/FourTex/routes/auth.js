const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const{JWT_SECRET}=require('../keys')
const requirelogin=require('../middleware/requireLogin')


router.post('/signup',requirelogin,(req,res)=>{
    const{name,email,password}=req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"Please Fill all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"Already exits"})
        }
        bcrypt.hash(password,10)
        .then(hashedpassword=>{
            const user =new User({
            email,
            password:hashedpassword,
            name
        })
        user.save().then(user=>{
            res.json({message:"Saved Successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
        })
    })
    .catch(err => {
        console.log(err)
    })
})


router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"Successfully Signed in"})
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                const{_id,name,email}=savedUser
                res.json({token,user:{name,email,_id}})
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
})

module.exports=router