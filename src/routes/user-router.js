const express=require('express')
const { getUser, registerUser ,postLoginUser,deleteMe, patchMe} = require('../modules/users/_controllers')
const isLoggedIn = require('../shared/auth/isLoggidin')

const router=express.Router()

router.get('/users',isLoggedIn,getUser)
router.post('/users/register',registerUser)
router.post('/users/login',postLoginUser)
router.patch('/users/me',isLoggedIn,patchMe)
router.delete('/users/me',isLoggedIn,deleteMe)

module.exports=router
