const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    phoneNumber : {
        type : String,
        unique : true
    },
    phoneSuffix : {
        type : String,
        unique : false
    },
    email : {
        type : String,
        validate : validator.isEmail
    },
    emailOtp : {
        type : String
    },
    emailOtpExpires : {
        type : Date
    },
    profilePicture : {
        type : String
    },
    userName : {
        type : String
    },
    about : {
        type : String
    },
    lastSeen : {
        type : Date
    },
    isOnline : {
        type : Boolean,
        default : false
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    agreed : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;