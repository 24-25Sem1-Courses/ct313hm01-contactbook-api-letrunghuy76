// src/app.js

const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/contacts.router');
const jsend = require('./jsend'); // Import tiện ích jsend
const {
    resourceNotFound,
    handleError,
} = require('./controllers/errors.controller');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json(jsend.success()); // Sử dụng hàm success
});

app.use('/public', express.static('public'));

contactsRouter.setup(app);

// Handle 404 response
app.use(resourceNotFound);

// Define error-handling middleware last, after other app.use() and routes calls
app.use(handleError);

module.exports = app;
