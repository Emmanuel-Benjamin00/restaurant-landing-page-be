import express from "express"
import FoodController from '../controllers/foods.js'
import Auth from "../common/auth.js"
const router = express.Router()

router.get('/getAllFoods',FoodController.getAllFoods)
router.get('/getFor30Min',FoodController.getFoodsfor30min)
router.get('/getForPopular',FoodController.getFoodsforPopularItems)
router.get('/getForTiffen',FoodController.getTiffen)
router.get('/getForRice',FoodController.getRice)
router.get('/getForEveCrk',FoodController.getEveCrk)
router.get('/getForSwt',FoodController.getSweet)
router.get('/getForKaaram',FoodController.getKaaram)
router.get('/getForCools',FoodController.getCools)
router.get('/getAllFoodsAdmin',Auth.validate,Auth.adminGuard,FoodController.getAllFoods)
router.post('/createfood',Auth.validate,Auth.adminGuard,FoodController.createFood)
router.put('/editfood/:id',Auth.validate,Auth.adminGuard,FoodController.editFood)
router.get('/:id',Auth.validate,Auth.adminGuard,FoodController.getFoodById)
router.delete('/:id',Auth.validate,Auth.adminGuard,FoodController.deleteFood)
// router.post('/forgotPassword',UserController.forgotPassword)
// router.put('/resetPassword',UserController.resetPassword)
// router.put('/addAddress',Auth.validate,UserController.addAddress)

export default router   