/* Complete the following MongoDB query using Mongoose to find all users with the role "admin".  

const mongoose = require('mongoose');
const User = require('./models/user');

async function findAdmins() {
    try {
        const admins = await User.find({ ?? });
        console.log(admins);
    } catch (error) {
        console.error(error);
    }
}

findAdmins();
*/
//Solution: 


const mongoose = require('mongoose');
const User = require('./models/user');

async function findAdmins() {
    try {
        const admins = await User.find({ role: 'admin' });
        console.log(admins);
    } catch (error) {
        console.error(error);
    }
}

findAdmins();