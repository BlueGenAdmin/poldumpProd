const mongoose = require('mongooose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const User = mongoose.model('User', userSchema);
module.exports = User;