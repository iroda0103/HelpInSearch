const express=require('express')
const User = require('./Model')
const httpValidator=require('../../shared/httpValidator')
const addUser=require('./add-user')
const { postRegisterUserSchema, postLoginUserSchema, patchMeSchema } = require('./_shema')
const loginUser = require('./login-users')
const removeUser = require('./remove-user')
const editUser = require('./edit-user')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction\} next 
 */
const getUser=async (req,res,next)=>{
    try{
       const user=await User.findAll()
       res.status(200).json({
        data:user
       })
    }
    catch(err){
        next(err)
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction\} next 
 */
const registerUser=async (req,res,next)=>{
    try{
        console.log(req.body,'ssssssssssss');
        httpValidator(req.body,postRegisterUserSchema)
       const user=await  addUser(req.body)

       res.status(201).json({
        data:user
       })
    }
    catch(err){
        next(err)
    }
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction\} next 
 */
const postLoginUser = async (req, res, next) => {
    try {
      httpValidator({ body: req.body }, postLoginUserSchema);
  
      const result = await loginUser(req.body);
  
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };


  /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction\} next 
 */
  const deleteMe = async (req, res, next) => {
    try {

      const result = await removeUser({ id: req.user.id });
  
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
  


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchMe = async (req, res, next) => {
    try {
      httpValidator({ body: req.body }, patchMeSchema);
  
      const result = await editUser({ id: req.user.id, ...req.body });
  
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
  
      
module.exports={
    getUser,
    registerUser,
    postLoginUser,
    patchMe,
    deleteMe
}