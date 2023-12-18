const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const customerSchema = new mongoose.Schema ({
    customerId: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)
