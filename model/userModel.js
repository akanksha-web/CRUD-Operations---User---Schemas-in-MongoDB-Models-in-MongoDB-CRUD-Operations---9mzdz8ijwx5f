const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  name: {
    type: String,
  },

  email: {
    type:String
  }
  // email as a String,
});

// Create and export the User model
module.exports = mongoose.model("users", userSchema);
