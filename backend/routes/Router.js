const express=require('express')

const router=express.Router()

const controller=require('../controller/Controller')

router.post('/register',controller.registerFun)
router.post('/login',controller.loginFun)

module.exports=router