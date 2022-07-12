
const fs = require('fs');
const data= fs.readFileSync('./data/users.json');
let dataUsers = JSON.parse(data);
let meetings=[];
dataUsers.users.forEach(user => meetings.push(user.meeting));
//     map((user)=>{ user.meeting}); 
// });
module.exports={
    getAllMeetings: async ()=>{
       return await meetings;
    },

    getMeetingByDate: async (date)=>{
        return await meetings.find(meeting=>meeting.date === date);
    },

    // searchUserByParams: async (userName,id)=>{ 
    //     if(userName&&id)
    //          return await dataUsers.users.find(user=>user.name === userName&&user.id === id);
    //  }

    
}