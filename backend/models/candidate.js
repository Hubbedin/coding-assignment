'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: process.env.CANDIDATE_COLLECTION
});

const candidate = module.exports = mongoose.model(process.env.CANDIDATE_COLLECTION, CandidateSchema);