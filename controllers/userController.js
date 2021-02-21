const Storage = require('../storage/userStorage');

class UsersController {
    
    storage;

    constructor() {
        this.storage = new Storage();
    }

    async create(user){
        await this.storage.create(user);
        return user.id;
    }

    async get(id){
        return await this.storage.findById(id);
    }    
}

let userController = new UsersController();
module.exports = userController;