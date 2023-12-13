import orderModel from "../models/orders.js";

const orderedFoods = async (req, res) => {
    try {
        const {foodId,foodOrdered,foodImg,price,address}=req.body
        await orderModel.create({
            foodId,
            foodOrdered,
            foodImg,
            price,
            address,
            createdBy: req.headers.userId
        })
        res.status(201).send({
            message: "Order entered payment stage Successfully"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getorderedfood = async (req, res) => {
    try {
        let food = await orderModel.find({ status: "pending" }).sort({ createdAt: 1 })
        res.status(200).send({
            message: "Foods Fetched Successfully",
            food
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export default {
    orderedFoods,
    getorderedfood
}