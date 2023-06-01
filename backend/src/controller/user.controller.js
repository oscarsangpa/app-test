import User from "../models/User.model.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const isExist = await User.findOne({ email });

  if (isExist) {
    const error = new Error("Email already exist");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error(`User doesn't exists`);
    return res.status(404).json({ msg: error.message });
  }

  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    const error = new Error("Incorrect credentials");
    return res.status(400).json({ msg: error.message });
  }
};

export { loginUser, registerUser };
