const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const card = require('../models/card')
const db = "mongodb://localhost/flashcards";

mongoose.connect(db, err => {
  if (err) {
    console.log("Connection error");
  }
})

router.get('/cards', function (req, res) {
  console.log("Requesting cards");
  card.find({})
    .exec(function (err, cards) {
      if (err) {
        console.log("Error getting the cards");
      } else {
        res.json(cards)
      }
    })
})

router.get('/cards/:id', function (req, res) {
  console.log("Requesting card");
  card.findById(req.params.id)
    .exec(function (err, card) {
      if (err) {
        console.log("Error getting the card");
      } else {
        res.json(card)
      }
    })
})

router.post('/new', function (req, res) {
  console.log("Adding a card");
  const newCard = new card();
  for (const key of Object.keys(req.body)) {
    newCard[key] = req.body[key];
  }
  newCard.save(function (err, addedCard) {
    if (err) {
      console.log('Error adding a card');
    } else {
      res.json(addedCard)
    }
  })
})

module.exports = router;
