import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (document, returnedObjectId) => {
        returnedObjectId.id = returnedObjectId._id;
        delete returnedObjectId.password;
        delete returnedObjectId.__v;
        return returnedObjectId;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function (formPassword) {
  return await bcrypt.compare(formPassword, this.password);
};

const User = model("User", userSchema);
export default User;
