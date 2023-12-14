import mongoose from './index.js'

const foodSchema = new mongoose.Schema({
    img:{type:String,required:[true,"Image is required"]},
    food:{type:String,required:[true,"Food Name is required"]},
    des:{type:String,required:[true,"Description is required"]},
    price:{type:Number,required:[true,"Price is required"]},
    category:{type:String,required:[true,"Category is required"]},
    webPageSHowFoods:{type:String,required:[true,"This is required"]}
},{
    collection:'foods',
    versionKey:false
})

const foodModel = mongoose.model('foods',foodSchema)
export default foodModel