const User = require("../models/User");
const bcrypt = require("bcryptjs");
const saltRounds = 5;
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

//Register a User | guest
const createUser = async (req, res) => {
  console.log("req", req);
  if (req.body) {
    let email = req.body.email;
    let username = req.body.username;

    await User.findOne({ email: email }, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (!result) {
          bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function (err, hash) {
              req.body.password = hash;

              const user = new User(req.body);
              await user
                .save()
                .then((data) => {
                  console.log(data);
                  res.status(200).send(data);
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).send(err);
                });
            });
          });
        } else {
          console.log("User Already Exist");
          res.status(500).send({ message: "User Already Exist" });
        }
      }
    });
  }
};

//login Validate
const validateUser = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (user == null) return res.status(500).send("User Not Found");
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        // result == true
        console.log("r:::", result);
        if (result) {
          console.log(user);
          // const token = jwt.sign(
          //   {
          //     fullName: user.fullName,
          //     email: user.email,
          //   },
          //   process.env.JWT_SECRET
          // );

          res.send({ userDetails: user });
        } else {
          console.log("Credentials Does Not Matched");
          res.status(500).send("Credentials Does Not Matched");
        }
      });
    }
  });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendEmail = (to, subject, email, password, res) => {
  const emailTemplate = `
  <html>
    <body>
      <h1>User Credentials your account on myConvo</h1>
      <p>Email Address - ${email}</p>
      <p>Password - ${password}</p>
    </body>
  </html>
`;
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: Number(process.env.EMAIL_PORT),
    secure: Boolean(process.env.SECURE),
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to,
    subject,
    html: emailTemplate,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error", error);
      res.status(500).send(error);
    } else {
      console.log("Verification email is sent to your email address");
      res
        .status(200)
        .send({ message: "Verification email is sent to your email address" });
    }
  });
};

const createStudent = async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    await sendEmail(email, "New Student Account", email, password, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userGetByUserType = async (req, res) => {
  try {
    const users = await User.find({ userType: req.params.userType });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  validateUser,
  updateUser,
  deleteUser,
  createStudent,
  userGetByUserType,
};
