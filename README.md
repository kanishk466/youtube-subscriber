# Subscribers API

## Overview

The Subscribers API allows you to manage subscriber data. It provides endpoints for retrieving all subscribers, specific subscriber details, and limited information about subscribers. The API is documented using Swagger and follows RESTful principles.

## Features

- Retrieve a list of all subscribers.
- Retrieve only names and subscribed channels of subscribers.
- Retrieve subscriber details by ID.
- Swagger-based API documentation.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Swagger for API documentation

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

```bash
npm install
```

### Setup the Database

Start your MongoDB server and ensure it is running on the default port.

Update the `DATABASE_URL` in `src/index.js` if necessary:

```javascript
const DATABASE_URL = "mongodb://localhost/subscribers";
```

### Run the Application

Start the server by running:

```bash
npm start
```

The server will run on `http://localhost:3000`.

### Access API Documentation

Open your browser and navigate to:

```
http://localhost:3000/api-docs
```

## API Endpoints

### 1. Get All Subscribers

**URL:** `/subscribers`

**Method:** `GET`

**Description:** Retrieve a list of all subscribers.

**Response:**

```json
[
  {
    "_id": "string",
    "name": "string",
    "subscribedChannel": "string",
    "subscribedDate": "date-time"
  }
]
```

### 2. Get Subscribers Names and Channels

**URL:** `/subscribers/names`

**Method:** `GET`

**Description:** Retrieve names and subscribed channels of all subscribers.

**Response:**

```json
[
  {
    "name": "string",
    "subscribedChannel": "string"
  }
]
```

### 3. Get Subscriber by ID

**URL:** `/subscribers/:id`

**Method:** `GET`

**Description:** Retrieve subscriber details by ID.

**Response:**

```json
{
  "_id": "string",
  "name": "string",
  "subscribedChannel": "string",
  "subscribedDate": "date-time"
}
```

**Error Response:**

```json
{
  "message": "Subscriber not found"
}
```

## Project Structure

```
src/
|-- models/
|   |-- subscribers.js  # Mongoose schema for subscribers
|-- app.js              # API routes and Swagger setup
|-- index.js            # Server startup and database connection
```

## Swagger Documentation

Swagger is set up at `/api-docs`. Use it to explore the endpoints and their responses.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

this project is created by kanishk Singh maurya

