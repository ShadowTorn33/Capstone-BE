const express = require('express')
const router = express.Router()

const { Review } = require('../models')

require('../config/db.connection')

// GET/reviews
router.get('/', async (req,res,next) => {
    try {
        const reviews = await Review.find({})
        res.status(200).json(reviews)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// POST/review
router.post('/', async (req,res,next) => {
    try {
        const createReview = await Review.create(req.body)
        res.status(201).json(createReview)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// GET/:id
router.get('/:id', async (req,res,next) => {
    try {
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// Update/:id
router.put('/:id', async (req,res,next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedReview)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// DELETE /:id
router.delete('/:id', async (req,res,next) => {
    try {
        const deletedReview = await Review.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: `${deletedReview.alt}` })
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router