const express=require('express')
const Address = require('./_Model')
const httpValidator=require('../../shared/httpValidator')
// const addUser=require('./add-user')
// const { postRegisterUserSchema } = require('./_shema')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction\} next 
 */
const getAddress=async (req,res,next)=>{
    try{
       const address=await Address.findAll()
       res.status(200).json({
        data:address
       })
    }
    catch(err){
        next(err)
    }
}



module.exports={
    getAddress
}