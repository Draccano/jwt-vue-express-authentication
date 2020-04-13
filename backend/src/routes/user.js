const express = require('express');

const router = express.Router();
const User = require('../models/User');

// const AuthenticationValidation = require('../validations/AuthenticationValidation')
const Joi = require('joi');

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
  const schema = {
    email: Joi.string().email(),
    username: Joi.string(),
    password: Joi.string().min(8).max(32),
  };
  const { error, value } = Joi.validate(req.body, schema);
  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'not valid email',
        });
        break;
      case 'username':
        res.status(400).send({
          error: 'username must be string',
        });
        break;
      case 'password':
        res.status(400).send({
          error: 'password must be long 8-32 characters.',
        });
        break;
      default:
        res.status(400).send({
          error: 'invalid registration information',
        });
    }
  } else {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    try {
      const savedUser = await user.save();
      res.json({ credentials: savedUser, status: 'ok' });
    } catch (err) {
      res.json({ message: err });
    }
  }
});

//login user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // const user = new User({
    //   username: req.body.username,
    //   password: req.body.password,
    //   email: req.body.email,
    // });
    const user = await User.findOne({ username: username });
    const passwordValid = password === user.password;
    if (!user || !passwordValid) {
      return res.status(403).send({
        error: 'The login information was incorrect',
      });
    }
    res.send({
      user: user.toJSON(),
    });
  } catch (err) {
    res.status(500).send({
      error: 'Error occured',
    });
  }
});

module.exports = router;
