const validator = require("validator");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      require: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      require: true,
      minlength: 3,
    },
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Id");
      }
    },
  },
  dob: {
    type: Date,
    require: true,
    default: Date.now,
  },
  profileImg: {
    data: Buffer,
    contentType: String,
  },
});
