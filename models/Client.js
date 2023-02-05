const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxLength: 50
        },
        lastName: {
            type: String,
            required: true,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            maxLength: 100,
            unique: true
        },
        password: {
            type: String,
            required: true,
            maxLength: 50
        }
    }
)

const Client = mongoose.model("Client", clientSchema)
module.exports = Client