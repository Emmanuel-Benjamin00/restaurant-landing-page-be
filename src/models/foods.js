import mongoose from './index.js'

const foodSchema = new mongoose.Schema({
    // img:{type:Image,required:[true,"Image is required"]},
    food:{type:String,required:[true,"Food Name is required"]}
},{
    collection:'foods',
    versionKey:false
})

const foodModel = mongoose.model('foods',foodSchema)
export default foodModel