
const logger = (log) => { console.log(new Date, log); };
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

logger('Libreria mongoose requerida');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'movies';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PWD = process.env.MONGO_PWD || null;

const QUERY_STRING = MONGO_USER ? `mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}` : `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

//Cuando se cumplio esa promesa, mostrara conexion establecida 
mongoose.connect(QUERY_STRING, { userNewUrlParser: true, useUnifiedTopology: true }).then (() => {
    logger('conexión establecida');
});

/************* SCHEMAS ************/
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
});

let orderSchema = mongoose.Schema({
    id_Order:{
        type: String,
        required: true
    },
    id_Movie:{
        type: String,
        required: true
    },
    id_User:{
        type: String,
        required: true
    },
    name_User:{
        type: String
    },
    reserve_Date:{
        type: Date
    },
    return_Date:{
        type: Date
    }
});

let filmSchema = mongoose.Schema({
    id_movie:{
        type: String,
        required: true 
    },
    title: {
        type: String
    },
    genres: {
        type: String
    }
});

/*************  ************/
const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);
const Film = mongoose.model('Film', filmSchema);

/*************  ************/
module.exports = {
    User
};

module.exports = {
    Order
};

module.exports = {
    Film
};