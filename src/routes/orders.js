import express from "express"
import OrderController from '../controllers/orders.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.post('/orderedFoods',Auth.validate,OrderController.orderedFoods)
router.get('/getorderedFood',Auth.validate, Auth.adminGuard,OrderController.getorderedfood)
router.put("/updateOrderedFood",Auth.validate, Auth.adminGuard, OrderController.updateOrderedfood)
// router.post('/login',UserController.login)
// router.post('/forgotPassword',UserController.forgotPassword)
// router.put('/resetPassword',UserController.resetPassword)
// router.put('/addAddress',Auth.validate,UserController.addAddress)

export default router   