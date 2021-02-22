class OrderModel {
    id;
    idFilm;
    idUser;
    nameUser;
    reserveDate;
    returnDate;

    constructor(order){
        this.id = order.id;
        this.idFilm = order.idFilm;
        this.idUser = order.idUser;
        this.nameUser = order.nameUser;
        this.reserveDate = reserveDate;
        this.returnDate = returnDate;
    }
} 

module.exports = OrderModel;

