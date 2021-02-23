const Storage = require('../storage/orderStorage');

class OrderController {

    orderStorage;

    constructor(){
        this.orderStorage = new Storage();
    }

    async create(order) {
        await this.orderStorage.create(order);
        return order._id;
    }

    async get(id){
        return await this.orderStorage.findById(id);
    }

    async delete(id){
        return await this.orderStorage.deleteById(id);
    }

    async update(id, order){
        return await this.orderStorage.update(id, order);
    }
}

let orderController = new OrderController();
module.exports = orderController;