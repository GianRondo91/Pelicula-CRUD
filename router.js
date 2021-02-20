//Creo un router
const router = require('express').Router();

//Creo userRouter
const userRouter = require('./routes/userRouter');

//Vinculo el userRouter
router.use('/users', userRouter);

//Exporto
module.exports = router;