import express from "express"
import FoodController from '../controllers/foods.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.get('/getAllFoods',FoodController.getAllFoods)
router.post('/createfood',FoodController.createFood)
router.put('/editfood/:id',FoodController.editFood)
router.get('/:id',FoodController.getFoodById)
router.delete('/:id',FoodController.deleteFood)
// router.post('/forgotPassword',UserController.forgotPassword)
// router.put('/resetPassword',UserController.resetPassword)
// router.put('/addAddress',Auth.validate,UserController.addAddress)

export default router   