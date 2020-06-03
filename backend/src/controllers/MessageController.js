const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      console.log(req.params);
      console.log(user);
      res.json(user.messages || [{ title: 'nothing to shown' }]);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured',
      });
    }
  },
  async post(req, res) {
    console.log(req.body);
    const { userId, title, description } = req.body;
    try {
      const user = await User.findById(userId);
      if (user) {
        user.messages.push({ title: title, description: description });
        user.save((err) => {
          if (err) return res.status(400).send('[endpoint] db error');
          console.log('message', user);
        });
      }
      console.log(user.messages);
      res.json(user.messages);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured',
      });
    }
  },
  async delete(req, res) {
    console.log(req.params);
    const { messageId, userId } = req.params;
    try {
      const user = await User.findById(userId);
      if (user) {
        user.messages.id(messageId).remove();
        user.save((err) => {
          if (err) return res.status(400).send('[endpoint] db error');
          console.log('message', user);
        });
      }
      console.log(user.messages);
      res.json(user.messages);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured',
      });
    }
  },
};
