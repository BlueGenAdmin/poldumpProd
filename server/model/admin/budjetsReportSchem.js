const mongoose =require("mongoose")


const budjetReports = new mongoose.Schema({

 
    unit:{
        type:String,
        require:true
    },
    office:{
        type:String,
        require:true
    },
    firstQuarter:{
        type:Number,
        require:true
    },
    secondQuarter:{
        type:Number,
        require:true
    },
    thirdQuarter:{
        type:Number,
        require:true
    },
    fourthQuarter:{
        type:Number,
        require:true
    },
    grandTotal:{
        type:Number,
        require:true
    },


})

const BudjetReportsdb= mongoose.model('budjetReportsDb', budjetReports); 
module.exports = BudjetReportsdb;