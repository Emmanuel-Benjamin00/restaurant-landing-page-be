import foodModel from "../models/foods.js";
import multer from "multer"

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

const createFood = async (req, res) => {
    try {
        const storage = multer.memoryStorage();
        const upload = multer({ storage: storage });

        // Use upload middleware to handle file upload
        upload.single('image')(req, res, async (err) => {
            if (err) {
                return res.status(500).send({
                    message: "Error uploading image",
                    error: err.message
                });
            }

            console.log(req.body.food);

            // Move this line inside the callback to ensure it's called after the file upload
            let foods = await foodModel.findOne({ food: req.body.food });
            console.log(foods);

            if (!foods) {
                const imageData = req.file.buffer.toString('base64');

                // Create a new food document with image data
                const newFood = new foodModel({
                    img: imageData,
                    food: req.body.food,
                    des: req.body.des,
                    price: req.body.price,
                    category: req.body.category,
                    webPageSHowFoods: req.body.webPageSHowFoods
                });

                await newFood.save();

                res.status(201).send({
                    message: "Food created successfully",
                    food: newFood.food
                });
            } else {
                res.status(400).send({ message: `${req.body.food} already exists` });
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export default {
    getAllFoods,
    createFood
}