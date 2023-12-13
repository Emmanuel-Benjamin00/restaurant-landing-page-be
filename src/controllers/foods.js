import foodModel from "../models/foods.js";

const getAllFoods = async (req, res) => {
    try {
        let foods = await foodModel.find({}).sort({ createdAt: 1 })
        res.status(200).send({
            message: "Foods Fetched Successfully",
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export default {
    getAllFoods
}