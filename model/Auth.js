const {Schema, model} = require('mongoose')

const Auth = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    hash_pass: {
        type: String
    },
    token:{
        type:String
    }

})


module.exports = model('Auth', Auth)