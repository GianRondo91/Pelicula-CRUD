const router = require('express').Router();
const filmController = require('../controllers/filmController');
const FilmModel = require('../models/filmModel');

router.post('/', async(req, res) => {
    try{
        const id = await filmController.create(new FilmModel(req.body));
        res.json(id);
    }catch(error){
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }
});

router.get('/:id', async (req, res)=> {
    try{
        const film = await filmController.get(req.params.id);
        if(!film){
            res.sendStatus(404);
        }else{
            res.json(film);
        }
    }catch(error){
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    };
});

router.put('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        res.json(await filmController.update(id, req.body));
    }catch(error){
        return res.status(500).json({
            message: 'Server error: ' + error
        });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await filmController.delete(id);
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }

});

module.exports = router;