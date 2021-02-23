const Order = require('../models/orderModel');

class OrderStorage {

    constructor() {
        console.log('Se ha creado una instancia de OrderStorage');
    }

    async findById(id) {
        const order = await Order.findById(id)
            .exec();
        return order;
    };

    async update(id, order) {
        await Order.findOneAndUpdate(id, order);
    };

    async deleteById(id) {
        return await Order.findByIdAndRemove(id);
    };

    async create(order) {
        await order.save();
    };

    async get() {
        return await Order.find();
    };
};

module.exports = OrderStorage