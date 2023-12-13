import express from "express"
import OrderController from '../controllers/orders.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.post('/orderedFoods',Auth.validate,OrderController.orderedFoods)
router.get('/getorderedFood',OrderController.getorderedfood)
// router.post('/login',UserController.login)
// router.post('/forgotPassword',UserController.forgotPassword)
// router.put('/resetPassword',UserController.resetPassword)
// router.put('/addAddress',Auth.validate,UserController.addAddress)

export default router   