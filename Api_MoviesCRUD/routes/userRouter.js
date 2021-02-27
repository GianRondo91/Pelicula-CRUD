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
            res.status(404);
        } else {
            res.json(user);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error:' + error
        });
    }
});

//Endpoint para actualizar un Usuario
router.put('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        res.json(await userController.update(id, req.body));
    }catch(error){
        return res.status(500).json({
            message: 'Server error: ' + error
        });
    }
});

//Endpoint para eliminar un Usuario
router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await userController.delete(id);
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }

});


//Exporto
module.exports = router;