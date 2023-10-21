const mongoose = require('mongoose');


const unitSchema = new mongoose.Schema({
    unit:{
        type:String,
        require:true
    }
})

const UnitSchema =  mongoose.model('UnitSchema',unitSchema);
module.exports = UnitSchema;