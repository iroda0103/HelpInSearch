const express=require('express')
const {getAddress } = require('../modules/address/_controllers')

const router=express.Router()

router.get('/address',getAddress)
// router.post('/users/register',registerUser)

module.exports=router