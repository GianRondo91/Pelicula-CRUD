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

router.put('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        res.json(await orderController.update(id, req.body));
    }catch(error){
        return res.status(500).json({
            message: 'Server error: ' + error
        });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await orderController.destroy(id);
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }

});

module.exports = router;