const { request } = require('express');
const express = require('express');

const userService= require('../services/User.service');
 
module.exports = {
    getAllUsers: async (req, res) => { 
try { 
const users=await userService.getAllUsers();
res.status(200).json({users })
}
catch (err) {  
    res.status(500).json({
        massage:`reading from json failed: ${err.message}`
    })
 }

    },

    getUserById:async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json({user});
        }
        catch (err){
            res.status(500).json({
                massage:`reading from json failed: ${err.message}`
        })}

    },
    searchUserByParams:async(req, res, next) => {
        try {
            // console.log(req.query.name);
            const user = await userService.searchUserByParams(req.query.name,req.query.id);
            res.status(200).json({user});
        }
        catch (err){
            res.status(500).json({
                massage:`reading from json failed: ${err.message}`
        })}

    },
    addUser: async(req, res, next)=>{
    try{
        const {user}= req.body;
        userService.addUser(user);
        res.status(200).json({user});

    }
    catch(err) {  
        res.status(500).json({
            massage:`reading from json failed: ${err.message}`
    }
    )}
    },
    updateUser:async(req,res,next)=>
    {
        try{
            const user= req.body;
            const id=req.query.id;
            userService.updateUser(id,user);
            res.status(200).json({user});
    
        }
        catch(err) {  
            res.status(500).json({
                massage:`reading from json failed: ${err.message}`
        }
        )}
    }
    
}



/////////////////////////////////////////////////////////////////////////////



/*



const { response } = require('express');
const userService = require('../services/userService');
​
const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json({
            users
        })
    }
    catch (err) {
        res.status(500).json({
            massage: `reading from json was failed ${err}`
        })
    }
};
​
const search = async (req, res) => {
}
​
const getUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await userService.getById(id);
        res.status(200).json({
            user
        })
    }
    catch (err) {
        res.status(500).json({
            massage: `reading from json was failed ${err}`
        })
    }
}
​
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { upUser } = req.body;
​
    if (id !== upUser.id) {
        res.status(400).json({
            massage: 'there is not a same user'
        });
    }
​
    const existingUser = userService.getById(id);
    if (!existingUser) {
        res.status(400).json({
            massage: 'user is not find'
        })
    }
​
    userService.updateUser(upUser);
    res.status(200).json({
        massage: 'user is updated'
    })
}
​
const remove = async (req, res) => {
    const { id } = parseInt(req.params);
    try {
        const deleteUser = await userService.deleteUser(id);
        res.status(200).json({
            massage: `user ${deleteUser} was deleted`
        })
        // res.send(deleteUser)
    }
    catch (err) {
        res.status(500).json({
            massage: `reading from json was failed ${err}`
        })
    }
}
​
const addUser = async (req, res) => {
​
    try {
        if (req.body.user) {
            const { user } = req.body;
​
            const created = await userService.addUser(user);
            console.log(created);
            res.status(200).json({
                massage: `user created successfully! user id is: ${created}`
            })
        }
        else {
            res.status(400).json({
                massage: `you have to send a user`
            })
        }
    }
    catch (err) {
        res.status(500).json({
            massage: `write to json was failed ${err}`
        })
    }
​
}
​
module.exports = {
    getAll,
    search,
    getUserByID,
    updateUser,
    remove,
    addUser,
}*/