const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = {
    id: String,
    idFilm:{
        type: ObjectId,
        required: true
    },
    idUser:{
        type: ObjectId,
        required: true
    },
    nameUser: String,
    reserveDate: Date,
    returnDate: Date,
} 

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;

