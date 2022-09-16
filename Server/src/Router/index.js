const express = require("express");
const bcrypt = require("bcryptjs");
require("../db/connection");
const router = new express.Router();
const User = require("../models/students");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, work, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res
        .status(422)
        .send({ error: "please filled the all fields properly" });
    }

    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(422).send({ error: "email already exist" });
    }
    if (password !== cpassword) {
      return res.status(422).send({ error: "password not match" });
    }

    const newUser = new User({ name, email, work, phone, password, cpassword });
    const createNewUser = await newUser.save();

    res.status(201).send(createNewUser);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "plz fill the data" });
    }
    const userEmail = await User.findOne({ email: email });

    if (userEmail) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        userEmail.password
      );

      const token = await userEmail.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isPasswordMatch) {
        res.send({ error: "Invalid credential" });
      } else {
        res.send({ message: "user sigin successfully" });
      }
    } else {
      res.send({ error: "Invalid  email credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

// middleware
// const middleware = (req, res, next) => {
//   console.log("hello middleware");
//   next();
// };
// router.get("/", middleware, async (req, res) => {
//   res.send("hello express");
// });

// router.get("/users", async (req, res) => {
//   try {
//     const studentData = await User.find();
//     res.status(200).send(studentData);
//   } catch (err) {
//     res.send(err);
//   }
// });
// router.get("/student/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await User.findById(_id);
//     res.send(studentData);
//   } catch (err) {
//     res.send(err);
//   }
// });

// // to update the field

// router.patch("/user/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await User.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(studentData);
//   } catch (err) {
//     res.send(err);
//   }
// });

// router.delete("/student/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await User.findByIdAndDelete(_id);
//     res.send(studentData);
//   } catch (err) {
//     res.send(err);
//   }
// });

module.exports = router;
