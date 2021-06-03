const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
}

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const { name, email } = req.body;
    let { password } = req.body;    
    password = await bcrypt.hash(password, 10);

    const user = await User.create({ 
      name, email, password
     });

     return res.send({
      user,
      token: generateToken({ id: user.id })
    });
  },
  async find(req, res) {
    const { email } = req.body;

    const user = await User.findOne({
       where: {
         email
        }
      });

    return res.json(user);
  },
  async authenticate (req, res) {
  
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
  
    if(!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    if(!await bcrypt.compare(password, user.password) ) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    res.send({
      user,  
      token: generateToken({ id: user.id })
    });
  }
}
 
