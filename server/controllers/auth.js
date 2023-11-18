const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginUser = async (req, res) => {
    const { username, password } = req.body
  
    try {
      // Check if the user exists
      const user = await User.findOne({ username })
      if (!user) {
        console.log('Login: Invalid Username or Email')
        return res.status(404).json({ message: 'Login: Invaild User' })
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        console.log('Login: Invalid Password')
        return res.status(401).json({ message: 'Login: Invalid password' })
      }
  
      const token = jwt.sign({ id: user.userId, username: user.username, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' })
      console.log('Login: Login successful')
  
      res.status(200).json({ message: 'Login: Login successful', token, userId: user._id })
    } catch (error) {
      res.status(500).json({ message: 'Login: Server error' })
    }
}