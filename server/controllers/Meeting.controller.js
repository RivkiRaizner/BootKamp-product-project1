const { request } = require('express');
const express = require('express');

const meetingService= require('../services/Meeting.service');
 
module.exports = {
    getAllMeetings: async (req, res) => { 
try { 
const meetings=await meetingService.getAllMeetings();
res.status(200).json({meetings })
}
catch (err) {  
    res.status(500).json({
        massage:`reading from json failed: ${err.message}`
    })
 }

    },

    getMeetingByDate:async (req, res) => {
        try {
            const date=req.params.date;
            const user = await meetingService.getMeetingByDate(date);
            res.status(200).json({user});
        }
        catch (err){
            res.status(500).json({
                massage:`reading from json failed: ${err.message}`
        })}

    },
    // searchUserByParams:async(req, res, next) => {
    //     try {
    //         const user = await userService.searchUserByParams(req.params.name,req.params.id);
    //         res.status(200).json({user});
    //     }
    //     catch (err){
    //         res.status(500).json({
    //             massage:`reading from json failed: ${err.message}`
    //     })}

    // }  
    
}