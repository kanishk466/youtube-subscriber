// src/app.js

const express = require('express');
const Subscriber = require('./models/subscribers'); // Import the Subscriber model
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Subscribers API',
            version: '1.0.0',
            description: 'API for managing subscribers',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     responses:
 *       200:
 *         description: Array of subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   subscribedChannel:
 *                     type: string
 *                   subscribedDate:
 *                     type: string
 *                     format: date-time
 */
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get names and subscribedChannel of all subscribers
 *     responses:
 *       200:
 *         description: Array of subscribers with name and subscribedChannel
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   subscribedChannel:
 *                     type: string
 */
app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}, 'name subscribedChannel');
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the subscriber to retrieve
 *     responses:
 *       200:
 *         description: Subscriber object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 subscribedChannel:
 *                   type: string
 *                 subscribedDate:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
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
