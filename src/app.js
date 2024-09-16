// src/app.js

const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/contacts.router');
const jsend = require('./jsend'); // Import tiện ích jsend
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json(jsend.success()); // Sử dụng hàm success
});

contactsRouter.setup(app);

module.exports = app;
