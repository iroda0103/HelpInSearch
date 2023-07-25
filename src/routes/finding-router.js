const express=require('express')
const multer  = require('multer')
const { getFinding,postFindings } = require('../modules/findings/_controllers')
const isLoggedIn = require('../shared/auth/isLoggidin')

const router=express.Router()
const upload = multer({ dest: 'uploads/' })

router.get('/findings',isLoggedIn,getFinding)
router.post('/findings',isLoggedIn,upload.single('img'),postFindings)

module.exports=router