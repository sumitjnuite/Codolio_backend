import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true  
    },
    notes:{
        type:String,
    },


},{timestamps:true});

const Transaction = mongoose.model('Transaction',transactionSchema);
export default Transaction;