// Name: Mackenzie Lubben-Ortiz
 //   Assignment: Appointment Route
   //  Date: 12/09/2023

const express = require('express')
const router = express.Router()
const Appointment = require('../models/appointment')

module.exports = router

router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find()
        res.json(appointments)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }

})
router.get('/:id', getAppointment, (req, res) => {
    res.json(res.appointment)
})

router.post('/', async (req, res) => {
    const customer = new Customer({
        customerId: req.body.customerId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        services: req.body.services
    })

    try {
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})
router.patch('/:id', getAppointment, async (req, res) => {
    if (req.body.customerId != null ) {
        res.customer.customerId = req.body.customerId
    }
    if (req.body.fname != null ) {
        res.customer.fname = req.body.fname
    }
    if (req.body.lname != null ) {
        res.customer.lname = req.body.lname
    }
    if (req.body.email != null ) {
        res.customer.email = req.body.email
    }
    if (req.body.service != null ) {
        res.customer.service = req.body.service
    }
    try {
        const updatedAppointment = await res.appointment.save()
        res.json(updatedAppointment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    
})
router.delete('/:id', getAppointment, async (req, res) => {
    try {
        await res.appointment.remove()
        res.json({ message: 'Deleted Appointment' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getAppointment(req, res, next) {
    let appointment
    try {
        appointment = await Appointment.findById(req.params.id)
        if(appointment == null) {
            return res.status(404).json({ message: 'Cannot find customer'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.appointment = appointment
    next()
}