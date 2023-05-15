const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, 12)
    .then((hashedPwd) => {
      const user = new User({
        email: email,
        password: hashedPwd,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "User successfully created",
        userId: result["_id"],
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((u) => {
      if (!u) {
        const error = new Error("A user with this mail could not be found");
        error.statusCode = 401;
        next(error);
      } else {
        loadedUser = u;
        bcrypt
          .compare(password, loadedUser.password)
          .then((isEqual) => {
            if (!isEqual) {
              const error = new Error("Wrong Password");
              error.statusCode = 401;
              throw error;
            }
            const token = jwt.sign(
              {
                email: loadedUser.email,
                userId: loadedUser._id.toString(),
              },
              "supersecretcode",
              { expiresIn: "12h" }
            );
            res.status(200).json({
              message: "User Logged",
              token: token,
            });
          })
          .catch((err) => {
            console.log(err);
            next(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
