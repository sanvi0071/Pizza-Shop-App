const mongoose = require('mongoose')
const { stringify } = require('uuid')

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'order name required']
    },
    email:{
        type: String,
        required:[true,'email is required']
    },
    userId:{
        type:String,
       // required: true
    },
    orderItems:[],
    shippingAddress:{
        type:Object,
        
    },
    orderAmount:{
        type:String,
        //required:true

    },
    isDelivered:{
        type:Boolean,
        default:false,
    },
    transactionId:{
        type:String,
       // required:true
    },

},{timestamps:true});
module.exports= mongoose.model('order', orderSchema);