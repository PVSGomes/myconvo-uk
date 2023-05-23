const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: false },
    phoneNo: { type: String, required: false },
    image: { type: String, required: false },
    password: { type: String, required: true },
    userType: { type: String,  required: true },
    isVerified: { type: String, required: false },
    graduationId: { type: String, required: false },


    eventTitle: { type: String, required: false },
    location: { type: String, required: false },
    date: { type: String, required: false },
    time: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
