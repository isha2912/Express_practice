const express = require('express');

const router = express.Router();
const { postHandler } = require('../handlers/quotes.handler');

router.post('/:id', postHandler);

module.exports = {
  router,
};
