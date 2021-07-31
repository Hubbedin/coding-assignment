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

const postVideo = async(req, res, next) => {
    const userId = req.body.user_id;
    const questionId = req.body.question_id;
    const videoPath = req.body.video_path;

    const data = {
        user_id: ObjectId(userId),
        question_id: ObjectId(questionId),
        video_path: videoPath
    };

    const video = await VideoSchema.create(data);
    res.status(200).json(video);
}

module.exports = {
    getAllVideos: getAll,
    getVideoByCandidate: getByUserId,
    postVideo
}