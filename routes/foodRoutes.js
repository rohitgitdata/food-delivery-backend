const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.post('/add', async (req, res) => {

    try {

        const food = new Food(req.body);
        await food.save();

        res.json(food);

    } catch (error) {

        res.status(500).json({message: error.message});
    }
});

router.get('/', async (req, res) => {

    try {

        const foods = await Food.find();
        res.json(foods);

    } catch (error) {

        res.status(500).json({message: error.message});
    }
});

module.exports = router;