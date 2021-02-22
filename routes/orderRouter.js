const router = require('express').Router();
const orderController = require('../controllers/orderController');
const OrderModel = require('../models/orderModel');

router.post('/', async (req,res) => {
    try {
        const id = await orderController.create(new OrderModel(req.body));
        res.json(id);
    }catch(error) {
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const order = await orderController.get(req.params.id);
        if(!order){
            res.sendStatus(404);
        }else{
            res.json(order);
        }
    }catch (error) {
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }
});

module.exports = router;