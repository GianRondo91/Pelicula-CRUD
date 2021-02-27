//Creo un router
const router = require('express').Router();

//Creo userRouter
const userRouter = require('./routes/userRouter');
const filmRouter = require('./routes/filmRouter');
const orderRouter = require('./routes/orderRouter');

//Vinculo el userRouter
router.use('/users', userRouter);
router.use('/films', filmRouter);
router.use('/orders', orderRouter);

//Exporto
module.exports = router;