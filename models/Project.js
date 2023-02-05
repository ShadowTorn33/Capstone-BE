const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
    {
        tag: {
            type: String,
            required: [true, "High from behind the scenes"]
        },
        description: {
            type: String,
            required: [true, "Remember this is what your clients see."]
        },
        image: {
            type: String,
            required: [true, "Sorry you need one of these"],
            maxLength: [300, "Exceeded the max length of 30 characters"],
            default: "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-20.jpg"
        },
        alt: {
            type: String,
            required: [true, "Think of the blind people"]
        },
        reviews: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    }
)

const Project = mongoose.model("Project", projectSchema)
module.exports = Project