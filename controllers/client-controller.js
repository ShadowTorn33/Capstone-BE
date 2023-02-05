const express = require('express')
const router = express.Router()

const { Client } = require('../models')

require('../config/db.connection')

// GET/projects
router.get('/', async (req,res,next) => {
    try {
        const clients = await Client.find({})
        res.status(200).json(clients)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// POST/projects
router.post('/', async (req,res,next) => {
    try {
        const createClient = await Client.create(req.body)
        res.status(201).json(createClient)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// GET/:id
router.get('/:id', async (req,res,next) => {
    try {
        const client = await Client.findById(req.params.id)
        res.status(200).json(client)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// Update/:id
router.put('/:id', async (req,res,next) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedClient)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// DELETE /:id
router.delete('/:id', async (req,res,next) => {
    try {
        const deletedClient = await Client.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: `${deletedClient.alt}` })
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router