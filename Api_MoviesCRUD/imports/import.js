const Db =  require('../storage/db');
const User =  require('../models/userModel');
const Order =  require('../models/orderModel');
const Film =  require('../models/filmModel');


const usersCollection = require('./db/users.json');
const ordersCollection = require('./db/orders.json');
const filmsCollection = require('./db/films.json');

const logger = (log) => { console.log(new Date, log); };


/*********/
User.insertMany(usersCollection)
    .then(() => logger('proceso terminado'));

Order.insertMany(ordersCollection)
    .then(() => logger('proceso terminado'));

Film.insertMany(filmsCollection)
    .then(() => logger('proceso terminado'));