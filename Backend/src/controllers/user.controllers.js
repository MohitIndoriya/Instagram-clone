const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const argon2 = require("argon2")


const SIGNUP = async (req, res) => {
  const { username, email, password, name } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ error: 'User already exists' });
    }
    const hashedPassword = await argon2.hash(password);

    user = await User.create({ username, email, password: hashedPassword, name });
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      }
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    res.status(201).send({ token, refreshToken, payload });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}


const LOGIN = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      }
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    res.status(201).send({ token, refreshToken, payload });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}


const USERNAME = async (req, res) => {
  try {
    let { username } = req.body
    let user = await User.findOne({ username })
    if (user) {
      return res.status(404).send("username is not unique")
    }
    return res.status(201).send("username is unique")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UPDATEPROFILE = async (req, res) => {
  let { userid } = req.params
  try {
    console.log(req.user, userid)
    if (req.user.id != userid) {
      return res.status(500).send("can not perform this action")
    }
    let uddate = await User.updateOne({ _id: userid }, { $set: { ...req.body } })
    return res.status(201).send(uddate)
  } catch (error) {
    return res.status(500).send(e.message)
  }
}

const GETALLUSER = async (req, res) => {
  let { page = 1 } = req.query
  try {
    let users = await User.find({}, { _id: 1, username: 1, image: 1 }).skip((page - 1) * 10).limit(10)
    return res.status(200).send(users)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = { SIGNUP, LOGIN, USERNAME, UPDATEPROFILE, GETALLUSER }