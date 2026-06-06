const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        default: "Beginner"
    },

    price: {
        type: Number,
        required: true
    },

    thumbnail: {
        type: String
    },

    duration: {
        type: String
    },

    language: {
        type: String,
        default: "English"
    },

    totalLessons: {
        type: Number,
        default: 0
    },

    rating: {
        type: Number,
        default: 0
    },

    studentsEnrolled: {
        type: Number,
        default: 0
    },

    isPublished: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model('courses',courseSchema);
