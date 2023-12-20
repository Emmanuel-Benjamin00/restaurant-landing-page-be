import foodModel from "../models/foods.js";
import multer from "multer"

const getAllFoods = async (req, res) => {
    try {
        let foods = await foodModel.find({})
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

const getFoodById = async (req, res) => {
    try {
        const foodId = req.params.id
        if (foodId) {
            let food = await foodModel.findById(req.params.id)
            res.status(200).send({
                message: "Blog Data Fetched Successfully",
                food
            })
        }
        else {
            res.status(400).send({ message: "FoodID not found" })
        }
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

        upload.single('image')(req, res, async (err) => {
            if (err) {
                return res.status(500).send({
                    message: "Error uploading image",
                    error: err.message
                });
            }

            console.log(req.body.food);

            let foods = await foodModel.findOne({ food: req.body.food });
            console.log(foods);

            const { food, des, price, category, webPageSHowFoods } = req.body
            if (req.file && food && des && price && category && webPageSHowFoods) {
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
                }
                else {
                    res.status(409).send({ message: `${req.body.food} already exists` });
                }
            } else {
                res.status(422).send({ message: `Fill all the fields` });
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            // error: error.message
        });
    }
};

const editFood = async (req, res) => {
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
            const foodId = req.params.id          

            if (foodId) {
                const { food, des, price, category, webPageSHowFoods } = req.body
                let editFood = await foodModel.findById(foodId)
                editFood.img = req.file ?  req.file.buffer.toString('base64'): editFood.img
                editFood.food = food ? food : editFood.food
                editFood.des = des ? des : editFood.des
                editFood.price = price ? price : editFood.price
                editFood.category = category ? category : editFood.category
                editFood.webPageSHowFoods = webPageSHowFoods ? webPageSHowFoods : editFood.webPageSHowFoods

                await editFood.save()

                res.status(200).send({
                    message: "Food Data Updated"
                })
            }
            else {
                res.status(400).send({ message: "No food in the specified ID" })
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            // error: error.message
        });
    }
}


const deleteFood = async(req,res) =>{
    try {
        let foodreq = await foodModel.findOne({ _id: req.params.id });
        console.log(foodreq)
        if(foodreq){
           await foodModel.deleteOne(foodreq)
        }
        res.status(202).send({
            message:`${foodreq.food} is deleted successfully`
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal Server Error",
            error
        });
    }
}

const getFoodsfor30min = async (req, res) => {
    try {
        let foods = await foodModel.find({webPageSHowFoods:"30 Min Delivery"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getFoodsforPopularItems = async (req, res) => {
    try {
        let foods = await foodModel.find({webPageSHowFoods:"Popular Items"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getTiffen = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Tiffen"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getRice = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Rice"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
const getEveCrk = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Evenings Crackers"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
const getSweet = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Sweet"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
const getKaaram = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Kaaram"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
            foods
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
const getCools = async (req, res) => {
    try {
        let foods = await foodModel.find({category:"Cool Drinks"})
        res.status(200).send({
            message:"Foods Fetched",
            data:foods.length,
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
    getAllFoods,
    getFoodsfor30min,
    createFood,
    editFood,
    getFoodById,
    deleteFood,
    getFoodsforPopularItems,
    getTiffen,
    getRice,
    getEveCrk,
    getSweet,
    getKaaram,
    getCools
}