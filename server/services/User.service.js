
const fs = require('fs');
const data= fs.readFileSync('../data/users.json');
let dataUsers = JSON.parse(data);


const saveToFile = async () => {
    const json = JSON.stringify( dataUsers )
    await fs.writeFileSync('../data/users.json', json, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

module.exports={
    getAllUsers: async ()=>{
       return await dataUsers.users;
    },

    getUserById: async (id)=>{
        return await dataUsers.users.find(user=>user.id === id);
    },

    searchUserByParams: async (userName,id)=>{ 
        if(userName&&id)
             return await dataUsers.users.find(user=>user.name === userName&&user.id === id);
     },

     addUser: async(user)=>
     {
        if(user)
        {
         await dataUsers.users.push(user);
         saveToFile();
        }
    },
    updateUser: async(id,user)=>
    {
        if(user&&id)
        {
        const indexUser = await dataUsers.users.findIndex(user => user.id === id);
         dataUsers.users[indexUser]=user;
         saveToFile();
        }
    }
    
}