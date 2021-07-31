'use strict';

const QuestionSchema = require('../models/question');

const getAll = async(req, res, next) => {
    const questions = await QuestionSchema.find().exec();
    //
    res.status(200).json({data: questions});
}

module.exports = {
    getAllQuestion: getAll,
}