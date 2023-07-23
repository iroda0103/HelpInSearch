const express=require('express')
const userRouter=require('./user-router')
const thingRouter=require('./thing-router')

const router=express.Router()

router.use(userRouter,thingRouter)

module.exports=router