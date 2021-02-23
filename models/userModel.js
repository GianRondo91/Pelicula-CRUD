const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const userSchema = {
    name: String,
    lastname: String,
    email: String,
    phone: String,
    password: String
}

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;