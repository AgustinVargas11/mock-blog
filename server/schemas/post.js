const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    img: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);