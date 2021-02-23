const mongoose = require('mongoose');

const userSchema = {
    id: String,
    name: String,
    lastname: String,
    email: String,
    phone: String,
    password: String
}

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;