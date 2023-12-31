import express from "express"
import UserRoutes from "./user.js"
import FoodRoutes from "./foods.js"
import OrderRoutes from "./orders.js"

// import OAuthRoutes from "./oauth.js"
// import ReqestRoutes from "./request.js"

// import BlogsRoutes from "./blogs.js"
// import DashboardRoutes from "./dashboard.js"

const router = express.Router()

router.use('/user',UserRoutes)
router.use('/food',FoodRoutes)
router.use('/order',OrderRoutes)

// router.use('/oauth',OAuthRoutes)
// router.use('/request',ReqestRoutes)
// router.use('/blogs',BlogsRoutes)
// router.use('/dashboard',DashboardRoutes)

export default router