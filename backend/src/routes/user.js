const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send({
    message: 'hello there',
  });
});

// get specific user
router.get('/:userId', async (req, res) => {
  // console.log(req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// remove specific user
router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// get all users
router.post('/all', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { username: req.body.username } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Register a user
router.post('/registration', async (req, res) => {
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.json({credentials: savedUser, status: 'ok'});
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
