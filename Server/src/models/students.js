const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const validator = require("validator");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    // unique: [true, "email already exist"],
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Invalid email");
    //   }
    // },
  },
  phone: {
    type: Number,
    required: true,
    // unique: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// hashing the passsword

userSchema.pre("save", async function (next) {
  console.log("hello inside bcrypt");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//generate the token and stored it in the database

userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenUtkarsh = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenUtkarsh });
    await this.save();
    return tokenUtkarsh;
  } catch (err) {
    console.log(err);
  }
};

// we will create a new collection

const User = new mongoose.model("User", userSchema);

module.exports = User;
