const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    authSource: "admin",
  })
  .then(() => console.log("connect successfully"))
  .catch((err) => console.log(err));

// const profileSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   gender: String,
//   active: Boolean,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   course: String,
// });

// const Profile = mongoose.model("profile", profileSchema);

// const createDocument = async () => {
//   try {
//     const profileDocument = new Profile({
//       name: "utkarsh tiwar",
//       age: 21,
//       gender: "Male",
//       active: true,
//     });
//     const secondProfileDocument = new Profile({
//       name: "ankur tiwari",
//       age: 25,
//       gender: "Male",
//       active: false,
//     });

//     const result = await Profile.insertMany([
//       profileDocument,
//       secondProfileDocument,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();

// const getDocument = async () => {
//     const result = await Profile.find({ age: 21 }).select({ age: 1 }).limit(1);
//     const result = await Profile.find({ age: { $gt: 21 } });
//     const result = await Profile.find({
//       name: { $in: ["utkarsh tiwar", "yuvraj Singh"] },
//     });

//   or operator
//     const result = await Profile.find({
//       $or: [{ name: "utkarsh tiwar" }, { age: 25 }],
//     }).countDocuments();

//and operator

//   const result = await Profile.find({
//     $and: [{ name: "utkarsh tiwar" }, { age: 21 }],
//   }).sort({ name: 1 });
//   console.log(result, "get Document succesfully");
// };

// getDocument();

//update the document

// const updateDocument = async (_id) => {
//   try {
//     const result = await Profile.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           course: "react js ",
//         },
//       },
//       { new: true, useFindAndModify: false }
//     );
//     console.log(result, "update successfully");
//   } catch (err) {
//     console.log(err, "not updated");
//   }
// };

// updateDocument("6317034e771a0305720783b7");

// delete the document

// const deletedocument = async (_id) => {
//   try {
//     const result = await Profile.findByIdAndDelete({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };<password>

// deletedocument("63175840874970f4f87cee35");
