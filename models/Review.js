const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        client: {
            type: String,
            require: [true, "Lets know who left the review"],
            unique: true
        },
        comment: {
            type: String,
            required: true
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            required: true
        }
    }
)

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review