//Creo un router
const router = require('express').Router();
const userController = require('../controllers/userController');
const UserModel = require('../models/userModel');

//Endpoint para crear usuario
router.post('/', async (req, res) => {
    try {
        const id = await userController.create(new UserModel(req.body));
        res.json(id);
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error:' + error
        });
    }
});

//Endpoint para Obtener usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userController.get(req.params.id);        
        if(!user){
            res.sendStatus(404);
        } else {
            res.json(user);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error:' + error
        });
    }
});

//Exporto
module.exports = router;