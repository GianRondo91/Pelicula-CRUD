const { Order } = require('./storage');

class OrderStorage {
    
    constructor(){
        console.log('Se ha creado una instancia de OrderStorage');
    }

    async findById(id){
        const order = await Order.findById(id)
            .exec();
        return order;
    };

    async update(orderModel){
        let order = new Order(orderModel);
        order._id = orderModel.id;
        await order.save();
    };

    async deleteById(id){
        return await Order.deleteById(id);
    };

    async create(orderModel){
        let order = new Order(orderModel);
        order = await order.save();
        orderModel.id = order._id;
    };

    async get(){
        return await Order.find();
    };
};

module.exports = OrderStorage