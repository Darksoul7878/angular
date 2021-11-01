const express = require("express");
const routes = express.Router();
const { check, validationResult } = require("express-validator");

// load input validations
const registerInputValidations = require("../../../validation/registerValidation");
//express
const User1 = require("../../../model/User");
routes.get("/test", (req, res) => {
  res.json({ msg: "hello form user" });
});

//@route : post api/users/register
//dec : register the user => new Record => post user
//access : public

routes.post(
  "/register",
  check("name", "Name is required").notEmpty(),
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").isLength({ min: 6 }),

  (req, res) => {
    console.log(JSON.stringify(req.body));
    // do we need to validate the data or not?
    const { errors, isValid } = registerInputValidations(req.body);

    console.log(isValid);
    // check validations
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //===> from here data will go to DB(mongodb)
    // to validate the data
    else {
      const newUser = new User1({
        name: res.body.name,
        email: res.body.email,
        password: res.body.password,
        avatar: res.body.avatar,
      });
    }
    newUser
      .save()
      .then((user) => res.json(user))
      .catch((error) => console.log(error));

    return res.json(req.body);
  }
);

module.exports = routes;
//it will exportsis to outside work
// public in nature

// refer this URL https://www.sitepoint.com/understanding-module-exports-exports-node-js/
