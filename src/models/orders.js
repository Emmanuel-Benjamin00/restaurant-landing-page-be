import mongoose from './index.js'

const orderSchema = new mongoose.Schema({
    foodId:{type:String,required:[true,"ID is required"]},
    foodOrdered:{type:String,required:[true,"FoodName is required"]},
    price:{type:Number,required:[true,"Price is required to send order details"]},
    address: { type: String,required:[true,"Address is required to send order details"]}, 
    status:{type:String,default:"Order Placed"},
    createdAt:{type:Date, default:Date.now()},
    OrderedCustomerId:{type: String, required: [true, "Customer ID is required"] },
    OrderedCustomerName:{type: String, required: [true, "Customer Name Required is required"] }
    // password:{type:String,required:[true,"Password is required"]},
    // role:{type:String,default:'user'},
       
},{
    collection:'orders',
    versionKey:false
})

const orderModel = mongoose.model('orders',orderSchema)
export default orderModel