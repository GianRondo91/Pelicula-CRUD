
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
mongoose.connect(QUERY_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).then (() => {
    logger('conexión establecida');
});
