const mongoose = require('mongoose');

const snackschema = mongoose.Schema({
    customer:{
        name:{
            type:String,
            require:true
        },
        phno:{
            type:String,
            require:true
        },
        mailid:{
            type:String,
            require:true
        }
    },
    item:{
    snack:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
        type:{ 
            type:String,
            require:true
        }
        }
    });

module.exports = mongoose.model('snacks',snackschema);