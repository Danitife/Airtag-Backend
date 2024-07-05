const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    tagname:{type: String, required: true, unique: true},
    location:{
        lat:{type: Number, required: true},
        lng:{type: Number, required: true}
    },
    dailyScore:{type: Number, default: 0},
    weeklyScore:{type: Number, default: 0},
    monthlyScore:{type: Number, default: 0},
    yearlyScore:{type: Number, default: 0},
    bankDetails:{
        accountNumber: {type: Number},
        bankName: {type: String}
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;