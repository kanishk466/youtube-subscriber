const express = require('express')
const app = require('./app.js')
const cors = require("cors");
const mongoose = require('mongoose')
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://kanishk:Password%40123@blog-app.7u0dvkj.mongodb.net/subscribers";


mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
