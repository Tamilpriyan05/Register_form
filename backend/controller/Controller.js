const models = require("../models/Models");

const registerFun = (req, res) => {
  const { username, email, password } = req.body;
  models
    .create({ username, email, password })
    .then(() => res.json("Create succesfully"))
    .catch((err) => res.json(err.message));
};

const loginFun = (req, res) => {
  const { email, password } = req.body;

  models
    .findOne({ email })
    .then((data) => {
      if (data) {
        if (data.password == password) {
          res.json("Login Succesfully");
        } else {
          res.json("Password incorrect");
        }
      } else {
        res.json("Email does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  registerFun,
  loginFun,
};
