// Import the necessary modules and models
//const userModel = require('../model/userModel');
 const User = require('../model/userModel');
const express = require('express');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
 // Implement user creation logic here
  // 1. Extract user data from the request body (req.body)
  const userID = req.body.userID;
   console.log("body", req.body);
  // 2. Create a new user using User.create()
  try {
    const users = await User.create({
      id:req.body.userID,
      name:req.body.name,
      email:req.body.email
  })
  console.log("creating users", users);
  res.status(201).json({message:"created user", users,userID});
  } catch (error) {
    console.log("error", error);
       res.status(500).json({message:"Internal server error"});
  }
  // 3. Handle success: Respond with a 201 status code and the created user
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

// Retrieve a user by ID
router.get('/users/:id', async (req, res) => {
  // Implement user retrieval logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
     const userId = req.params.id;
     try {
       const user = await User.findById(userId);
       if(!user){
        res.status(404).json({message: "User not found"});
       }
       res.status(200).json({message:"Profile data", user});
     } catch (error) {
       console.log("error", error);
       res.status(500).json({message:"Internal server error"});
     }
  // 2. Find the user by ID using User.findById()
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
  // Implement user update logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
   const userId = req.params.id;
  // 2. Extract updated user data from the request body (req.body)

   const updatedData = {
    name:req.body.name,
    email:req.body.email
   }
  // 3. Use User.findByIdAndUpdate() to update the user
  try {
    const user = await User.findByIdAndUpdate(userId,updatedData,{new:true})
    if(!user){
      res.status(404).json({message: "User not found"});
     }
     res.status(200).json({message:"User updated", user});
  } catch (error) {
    console.log("error", error);
       res.status(500).json({message:"Internal server error"});
  }
  // 4. Handle success: Respond with a 200 status code and the updated user data
  // 5. Handle errors: Respond with appropriate error messages and status codes
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  // Implement user deletion logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  const userId = req.params.id;
 
  try {
    const user = await User.findByIdAndDelete(userId)
    if(!user){
      res.status(404).json({message: "User not found"});
     }
     res.status(200).json({message:"User deleted", user});
  } catch (error) {
    console.log("error", error);
       res.status(500).json({message:"Internal server error"});
  }
  // 2. Use User.findByIdAndDelete() to delete the user
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

module.exports = router;
