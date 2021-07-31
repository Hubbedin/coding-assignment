'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    video_path: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: process.env.CANDIDATE_COLLECTION,
        required: true
    },
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: process.env.QUESTION_COLLECTION,
        required: true
    },
}, { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: process.env.VIDEO_COLLECTION 
});

module.exports = mongoose.model(process.env.VIDEO_COLLECTION, VideoSchema);