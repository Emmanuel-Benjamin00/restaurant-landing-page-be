import mongoose from './index.js'

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const validatePhoneNumber = (phoneNumber) => {
    var phonePattern = /^[0-9\s\-()+]+$/;
    return phonePattern.test(phoneNumber);
}

const userSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is required"]},
    mobile:{type:Number,required:[true,"Mobile Number is required"],validate:validatePhoneNumber},
    email:{type:String,required:[true,"Email is required to send order details"],validate:validateEmail},
    password:{type:String,required:[true,"Password is required"]},
    role:{type:String,default:'user'},
    address: { type: [String], default: [] }, 
    createdAt:{type:Date, default:Date.now()},
    randomString:{type:String}
},{
    collection:'users',
    versionKey:false
})

const userModel = mongoose.model('users',userSchema)
export default  userModel