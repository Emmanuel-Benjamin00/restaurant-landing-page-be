import orderModel from "../models/orders.js";

const orderedFoods = async (req, res) => {
    try {
        const { foodId, foodOrdered, price, address } = req.body
        await orderModel.create({
            foodId,
            foodOrdered,
            price,
            address,
            OrderedCustomerId: req.headers.userId,
            OrderedCustomerName: req.headers.userName
        })
        res.status(201).send({
            message: "Order Placed"
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
        let food = await orderModel.find()
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

const updateOrderedfood = async (req, res) => {
    try {
        const orderedId = req.body.orderId
        const selectedOrderedID = await orderModel.findById(orderedId)
        const { status } = req.body

        if (orderedId) {
            selectedOrderedID.status = status ? status : selectedOrderedID.status
            selectedOrderedID.OrderedCustomerId= req.headers.userId
            selectedOrderedID.OrderedCustomerName= req.headers.userName
        }

        await selectedOrderedID.save()

        res.status(200).send({
            data: selectedOrderedID
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
    getorderedfood,
    updateOrderedfood
}