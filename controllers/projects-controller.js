const express = require('express')
const router = express.Router()
router.use(express.json())

const { Project } = require('../models')

require('../config/db.connection')

// GET/projects
router.get('/', async (req,res,next) => {
    try {
        const projects = await Project.find({})
        res.status(200).json(projects)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// POST/projects
router.post('/', async (req,res,next) => {
    try {
        const createProject = await Project.create(req.body)
        res.status(201).json(createProject)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// GET/:id
router.get('/:id', async (req,res,next) => {
    try {
        const project = await Project.findById(req.params.id)
        res.status(200).json(project)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// Update/:id
router.put('/:id', async (req,res,next) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedProject)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})


// DELETE /:id
router.delete('/:id', async (req,res,next) => {
    try {
        const deletedProject = await Project.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: `${deletedProject.alt}` })
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router