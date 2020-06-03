const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MessageSchema = mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: {} }
);

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [MessageSchema],
});

// hooks called before save
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

// additional methods
UserSchema.methods.comparePassword = function (password) {
  console.log(password, ' ', this.password);
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
