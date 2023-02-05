require('dotenv').config
const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')

const { PORT } = process.env

const { clientController, ReviewController, ProjectController } = require('./controllers')

require('./config/db.connection')


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/clients', clientController)
app.use('/projects', ProjectController)
app.use('/reviews', ReviewController)
// Error handling middleware
app.use((error,req,res,next) => res.status(500).send(error))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})