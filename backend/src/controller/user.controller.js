import User from "../models/User.model.js";

const createUser = (req, res) => {
  const { newUser } = req.body;

  User.create(newUser)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => console.log(err));
};

export { createUser };
