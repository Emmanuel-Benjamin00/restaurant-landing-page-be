import express from "express"
import FoodController from '../controllers/foods.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.get('/getAllFoods',FoodController.getAllFoods)
// router.post('/login',UserController.login)
// router.post('/forgotPassword',UserController.forgotPassword)
// router.put('/resetPassword',UserController.resetPassword)
// router.put('/addAddress',Auth.validate,UserController.addAddress)

export default router   