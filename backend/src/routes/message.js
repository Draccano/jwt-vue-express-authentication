const express = require('express');

const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../policies/isAuthenticated');
require('dotenv/config');
const MessageController = require('../controllers/MessageController');

router.get('/messages', isAuthenticated, MessageController.index);
router.post('/messages', isAuthenticated, MessageController.post);
router.delete(
  '/messages/:messageId',
  isAuthenticated,
  MessageController.delete
);

module.exports = router;
