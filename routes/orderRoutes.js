const express = require ('express')
const router = express.Router();
const {v4: uuidv4}= require('uuid');
 const stripe = require ('stripe')('sk_test_51Ltp10SFFP8zhYNbyCvozeLVzITmLBlYUpVRlaMvxpUe1WzTJsqIbeoe8aIiISQpUi3ULfjZpBsJ8S6IbpyDnTU200j2Vl721U');
 const Order = require('../models/orderModel');
 router.post('/placeOrder', async (req,res) => {
    const {token,subTotal,currentUser,cartItems} = req.body
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source:token.id
        });
        const payment = await stripe.charges.create({
            amount:subTotal*100,
            currency:'INR',
            customers:customers.id,
            receipt_email:token.email
        },{
            idemPotencyKey: uuidv4(),
        });
        if(payment){
            const newOrder = new Order( {
             name:currentUser.name,
             email:currentUser.email,
             userId:currentUser._id,
            orderItems:cartItems,
            orderAmount: subTotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                pinCode:token.card.address_zip,

            },
            transactionId:payment.source.id,
            });
            newOrder.save();
            res.send('Payment Success');
         }else{
            res.send('Payment Failed');
         }

    } catch (error) {
        res.status(400).json({
            message:'Something went wrong',
            error:error.stack
        });
        
    }
 });

 router.post('/getUserOrder', async (req,res)=>{
    const {userId} = req.body
    try {
      const orders = await Order.find({userId}).sort({_id:'-1'}) ; 
      res.status(200).send(orders)
    } catch (error) {
        res.status(400).json({
            message:'Something went wrong',
            error:error.stack
        });
    }
 });
 router.get('/allUserOrder', async (req,res)=>{
     try {
      const orders = await Order.find({}) ; 
      res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message:'Something went wrong',
            error:error.stack,
        });
    }
 });

 router.post('/deliverOrder', async (req,res)=>{
    const orderId= req.body.orderId
    try {
     const order = await Order.findOne({_id:orderId}) ;
     order.isDelivered=true
     await order.save();
     res.status(200).send('Order Delivered success');
   } catch (error) {
       res.status(400).json({
           message:'Something went wrong',
           error:error.stack,
       });
   }
});
 module.exports = router;
