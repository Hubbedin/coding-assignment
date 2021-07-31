'use strict';

const { ObjectId } = require('bson');
const VideoSchema = require('../models/video');

const getAll = async(req, res, next) => {
    const videos = await VideoSchema.find().exec();
    //
    res.status(200).json({data: videos});
}

const getByUserId = async(req, res, next) => {
    const id = req.params.id;
    const video = await VideoSchema.find({user_id: ObjectId(id)}).exec();
    
    res.status(200).json({data: video});
}

module.exports = {
    getAllVideos: getAll,
    getVideoByCandidate: getByUserId
}