const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const _ = require("lodash");

const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

dotenv.config({ path: './config.env' })

mongoose.connect(process.env.DB_URL).then(() => {

    // Wait for MongoDB connection first, and then build the server
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server started on PORT: ${process.env.PORT}`);
    })
  
});

const cardSchema = {
    category: String,
    image: {type: [String]},
    title: String,
    description: String
};

const Card = mongoose.model("Card", cardSchema);


// API

app.get('/', (req, res) => {

    res.json({ message: "Hello from server!" });
});

app.post('/compose', (req, res) => {

    const newCard = new Card ({
        category: req.body.category,
        image: req.body.image,
        title: req.body.title,
        description: req.body.description
    });

    Card.find({}).then(foundCards => {
        foundCards.push(newCard);
        newCard.save();
    });

    res.redirect("/compose");

});

app.get('/installation', (req, res) => {
    Card.find({ category: 'Installation' })
      .then(foundCards => {
        res.status(200).json(foundCards);
      })
      .catch(error => {
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve cards.' });
      });
  });
  
  app.get('/allegories', (req, res) => {
    Card.find({ category: 'Allegories' })
      .then(foundCards => {
        res.status(200).json(foundCards);
      })
      .catch(error => {
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve cards.' });
      });
  });
  
  app.get('/vessels', (req, res) => {
    Card.find({ category: 'Vessels' })
      .then(foundCards => {
        res.status(200).json(foundCards);
      })
      .catch(error => {
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve cards.' });
      });
  });
  
  app.get('/public-engagement', (req, res) => {
    Card.find({ category: 'Public-Engagement' })
      .then(foundCards => {
        res.status(200).json(foundCards);
      })
      .catch(error => {
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve cards.' });
      });
  });
  
app.get('/:category/:artwork/:id', (req, res) => {
    Card.find({_id: req.params.id})
        .then(foundCards=> {
            res.status(200).json(foundCards)
        })
        .catch(error => {
            console.log('Error:', error);
            res.status(500).json({ error: 'Failed to retrieve cards.' });
        });
});