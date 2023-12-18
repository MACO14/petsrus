// Name: Mackenzie Lubben-Ortiz
 //   Assignment: Appointment 
   //  Date: 12/09/2023

const mongoose = require('moongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const appointmentSchema = new mongoose.Schema ({
    customerId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        unique: true, 
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    service: {
        type: String,
        required: true,
        unique: true,
    }
})
module.exports = mongoose.model('Appointment', appointmentSchema)
  