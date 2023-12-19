import express from "express"
import UserController from '../controllers/users.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.post('/signup',UserController.create)
router.post('/login',UserController.login)
router.post('/forgotPassword',UserController.forgotPassword)
router.put('/resetPassword',UserController.resetPassword)
router.put('/addAddress',Auth.validate,UserController.addAddress)
router.get('/getUsers',UserController.getUsers)

export default router   