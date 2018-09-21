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
  card.find({})
    .exec(function (err, cards) {
      if (err) {
        console.log("Error getting the cards");
      } else {
        res.json(cards);
      }
    })
})

router.get('/cards/:id', function (req, res) {
  card.findById(req.params.id)
    .exec(function (err, card) {
      if (err) {
        console.log("Error getting the card");
      } else {
        res.json(card);
      }
    })
})

router.put('/update', function (req, res) {
  card.findByIdAndUpdate(req.body._id, req.body,
    function (err, card) {
      if (err) {
        console.log("Error updating the card");
      } else {
        res.json(card);
      }
    }
  )
})

router.post('/new', function (req, res) {
  const newCard = new card();
  for (const key of Object.keys(req.body)) {
    newCard[key] = req.body[key];
  }
  newCard.save(function (err, addedCard) {
    if (err) {
      console.log('Error adding the card');
    } else {
      res.json(addedCard);
    }
  })
})

router.delete('/delete/:id', function (req, res) {
  card.deleteOne({
    _id: req.params.id
  }, function (err, card) {
    if (err) {
      console.log('Error deleting a card');
    } else {
      res.json(card)
    }
  })
})

module.exports = router;
