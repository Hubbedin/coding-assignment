'use strict';

const CandidateSchema = require('../models/candidate');

const getAll = async(req, res, next) => {
    const candidates = await CandidateSchema.find().exec();
    //
    res.status(200).json({data: candidates});
}

module.exports = {
    getAllCandidate: getAll,
}