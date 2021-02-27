const Storage = require('../storage/userStorage');

class UsersController {
    
    storage;

    constructor() {
        this.storage = new Storage();
    }

    async create(user){
        await this.storage.create(user);
        return user._id;
    }

    async get(id){
        return await this.storage.findById(id);
    }

    async delete(id){
        return await this.storage.deleteById(id);
    }

    async update(id, user){
        return await this.storage.update(id, user);
    }
}

let userController = new UsersController();
module.exports = userController;