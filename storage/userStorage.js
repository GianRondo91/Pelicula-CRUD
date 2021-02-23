// Pongo las llaves para quedarme solo con user
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


class UserStorage {

    constructor() {
        console.log('se ha creado una instancia de UserStore');
    }

    async findById(id) {
        const user = await User.findById(id)
            .exec();
        return user;
    }

    async update(id, user) {
        await User.findOneAndUpdate(id, user);
    }

    async deleteById(id) {
        return await User.findByIdAndRemove(id);
    }

    // async create(userModel) {
    //     let user = new User(userModel);        
    //     user = await user.save();
    //     userModel.id = user._id;
    // }

    async create(user) {
        const encrytedPassword = await bcrypt.hash(user.password, 6);
        user.password = encrytedPassword;
        await user.save();
    }

    async get() {
        return await User.find();
    }
}

module.exports = UserStorage;