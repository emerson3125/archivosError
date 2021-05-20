const {Schema, model} = require('mongoose');

const userDataBaseArwins = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String 
})

module.exports = model('user', userDataBaseArwins)