const express = require('express');

const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const MessageController = require('../controllers/MessageController');

router.get('/:userId/messages', MessageController.index);
router.post('/messages', MessageController.post);
router.delete('/:userId/messages/:messageId', MessageController.delete);

module.exports = router;
