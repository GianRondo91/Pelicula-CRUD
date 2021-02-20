const Storage = require('../storage');

class UsersController {
    
    storage;

    constructor() {
        this.storage = new Storage();
    }

    async create(user){
        return await this.storage.set(user);
    }

    async get(id){
        return await this.storage.findById(id);
    }    
}

let userController = new UsersController();
module.exports = userController;