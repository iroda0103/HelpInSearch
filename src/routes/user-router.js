const express=require('express')
const { getUser, registerUser ,postLoginUser,deleteMe, patchMe} = require('../modules/users/_controllers')
const isLoggedIn = require('../shared/auth/isLoggidin')

const router=express.Router()

router.get('/api/users',isLoggedIn,getUser)
router.post('/api/users/register',registerUser)
router.post('/api/users/login',postLoginUser)
router.patch('/api/users/me',isLoggedIn,patchMe)
router.delete('/api/users/me',isLoggedIn,deleteMe)

module.exports=router
