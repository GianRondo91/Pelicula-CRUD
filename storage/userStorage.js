
// Pongo las llaves para quedarme solo con user
const { User } = require('./storage');

class UserStorage {

    constructor() {
        console.log('se ha creado una instancia de UserStore');
    }

    async findById(id){
        const user = await User.findById(id)
            .exec();
        return user;
    }

    async update(userModel){        
        let user = new User(userModel);
        user._id = userModel.id;
        await user.save();
    }

    async deleteById(id){
        return await User.deleteById(id);
    }

    async create(userModel) {
        let user = new User(userModel);        
        user = await user.save();
        userModel.id = user._id;
    }

    async get(){
        return await User.find();
    }

}

module.exports = UserStorage;