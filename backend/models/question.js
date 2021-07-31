'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    max_time: {
        type: Number,
        default: 1
    }
}, { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: process.env.QUESTION_COLLECTION
});

module.exports = mongoose.model(process.env.QUESTION_COLLECTION, QuestionSchema);