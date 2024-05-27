# CRUD_MongoDB

If you want, use the 0.9v branch for keep going in new projects. In this time, we don't aplly M.V.C and just has the essential.

This repository contains the following files:

- `love.model.js`: This file defines the Love model for CRUD operations in MongoDB. It provides a schema for the Love collection and defines methods for creating, reading, updating, and deleting Love records.

  Dependencies:
  - `mongoose`: A MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward, schema-based solution to model your application data.

  Usage:
  - Import the `mongoose` module and the `love.model.js` file.
  - Create a new instance of the Love model using the schema defined in `love.model.js`.
  - Use the provided methods to perform CRUD operations on the Love collection.

- `index.js`: This file serves as the entry point for the CRUD operations using the Love model. It establishes a connection to the MongoDB database and provides an API for interacting with the Love collection.

  Dependencies:
  - `express`: A fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for web and mobile applications.
  - `body-parser`: A middleware that parses incoming request bodies in a middleware before your handlers, available under the `req.body` property.
  - `cors`: A middleware that enables Cross-Origin Resource Sharing (CORS) for Express.js.

  Usage:
  - Import the required modules and the `love.model.js` file.
  - Set up the Express.js server and configure the necessary middleware.
  - Establish a connection to the MongoDB database using `mongoose`.
  - Define the API routes for CRUD operations using the Love model.
  - Start the server and listen for incoming requests.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/CRUD_MongoDB.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

Make sure you have MongoDB installed and running on your machine.

## API Endpoints

- `GET /love`: Retrieves all Love records.
- `GET /love/:id`: Retrieves a specific Love record by ID.
- `POST /love`: Creates a new Love record.
- `PUT /love/:id`: Updates an existing Love record by ID.
- `DELETE /love/:id`: Deletes a Love record by ID.

Feel free to explore the code and customize it according to your needs.
