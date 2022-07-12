const express = require('express');
const router = express.Router();

const meetingController= require('../controllers/Meeting.controller');

router.get('/',meetingController.getAllMeetings);
router.get('/?date',meetingController.getMeetingByDate);
// router.get('/:id',userController.getUserById);
// router.get('/search',userController.searchUserByParams);

module.exports= router;