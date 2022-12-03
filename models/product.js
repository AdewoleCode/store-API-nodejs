const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
    },
     price:{
        type: Number,
        required: [true, 'must provide price'],
     },
     rating: {
        type: Number,
        default: 4.5,
     },
     createdAt : {
        type: Date,
        default: Date.now(),
     },
     company: {
        type: String,
        enum: {
            values: ['jumia', 'apple', 'lenovo', 'samsung'],
            message: '{VALUE} is not supported'
        }
     }

})


module.exports = mongoose.model('Product', ProductSchema)