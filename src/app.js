
const express = require('express');
const app = express()



// src/app.js


const Subscriber = require('./models/subscribers'); // Import the Subscriber model


// Route to get all subscribers
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get names and subscribedChannel of all subscribers
app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}, 'name subscribedChannel');
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get a subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        if (!subscriber) {
            return res.status(400).json({ message: 'Subscriber not found' });
        }
        res.status(200).json(subscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = app;

// Your code goes here





















module.exports = app;
