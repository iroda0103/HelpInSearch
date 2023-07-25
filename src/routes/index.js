const express=require('express')
const userRouter=require('./user-router')
const findinRouter=require('./finding-router')
const addressRouter=require('./address-router')

const router=express.Router()

router.use(userRouter,findinRouter,addressRouter)

module.exports=router