const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

module.exports = router

// Getting all
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }

})
// Getting one
router.get('/:id', getCustomer, (req, res) => {
    res.json(res.customer)
})

// Creating one
router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email
    })

    try {
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})

// Updating one
router.patch('/:id', getCustomer, async (req, res) => {
    if (req.body.name != null ) {
        res.customer.name = req.body.name
    }
    if (req.body.email != null ) {
        res.customer.email = req.body.email
    }
    try {
        const updatedCustomer = await res.customer.save()
        res.json(updatedCustomer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    
})

// Deleting one
router.delete('/:id', getCustomer, async (req, res) => {
    try {
        await res.customer.remove()
        res.json({ message: 'Deleted Customer' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getCustomer(req, res, next) {
    let customer
    try {
        customer = await Customer.findById(req.params.id)
        if(customer == null) {
            return res.status(404).json({ message: 'Cannot find customer'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.customer = customer
    next()
}