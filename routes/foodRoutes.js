const express = require("express");

const router = express.Router();

const Food = require("../models/Food");


// GET ALL FOODS

router.get("/", async (req, res) => {

  try {

    const foods = await Food.find();

    res.json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// ADD FOOD

router.post("/", async (req, res) => {

  try {

    const newFood = new Food({

      name: req.body.name,

      price: req.body.price,

      image: req.body.image,

      description: req.body.description

    });

    const savedFood = await newFood.save();

    res.status(201).json(savedFood);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// DELETE FOOD

router.delete("/:id", async (req, res) => {

  try {

    const deletedFood =
      await Food.findByIdAndDelete(
        req.params.id
      );

    if (!deletedFood) {

      return res.status(404).json({
        message: "Food not found"
      });

    }

    res.json({
      message: "Food Deleted Successfully 🗑️"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// UPDATE FOOD

router.put("/:id", async (req, res) => {

  try {

    const updatedFood =
      await Food.findByIdAndUpdate(

        req.params.id,

        {
          name: req.body.name,
          price: req.body.price,
          image: req.body.image,
          description: req.body.description
        },

        {
          new: true
        }

      );

    if (!updatedFood) {

      return res.status(404).json({
        message: "Food not found"
      });

    }

    res.json(updatedFood);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;