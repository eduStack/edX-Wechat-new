const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  openid: String,
  access_token: String,
  expires_in: Date,
  refresh_token: String
});

UserSchema.statics.findUserByOpenid = function(openid) {
  return this.findOne({ openid: openid }).exec();
};

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
