const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password:{type:String , required : true},
  dateOfCreation: { type: Date, default: Date.now },
});
const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
