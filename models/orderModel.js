class OrderModel {
    id_Order;
    id_Movie;
    id_User;
    name_User;
    reserve_Date;
    return_Date;

    constructor(order){
        this.id_Order = order.id_Order;
        this.id_Movie = order.id_Movie;
        this.id_User = order.id_User;
        this.name_User = order.name_User;
        this.reserve_Date = reserve_Date;
        this.return_Date = return_Date;
    }
} 

module.exports = OrderModel;

