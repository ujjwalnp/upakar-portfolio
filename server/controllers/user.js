const User = require('../models/User')
const bcrypt = require('bcrypt')

/* CREATE API */
exports.addSkill = async(req, res)=>{
    try {
        const { userId } = req.params
        const { value } = req.body

        // find the user
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // push new skill to user.skills
        user.skills.push({ value })

        // save the user
        await user.save()

        res.status(201).json({ message: 'Skill added successfully', user })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.addService = async(req, res)=>{
    try {
        const { userId } = req.params
        const { index, title, description } = req.body

        // find the user
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // push new service to user.services
        user.services.push({ index, title, description })

        // save the user
        await user.save()

        res.status(201).json({ message: 'Service added successfully', user })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/* READ API */
exports.getUserDetails = async(req, res) => {
    try {
        const user = await User.findOne({ type: 'admin' }).select('-password')

        if (!user) {
            // If no user found with the given userId, return a 404 response
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

/* UPDATE API */
exports.updateUserDetails = async (req, res) => {
    // Parse userId from the URL
    const { userId } = req.params
  
    try {
      // Get the user of the specific userId
      const user = await User.findById(userId)
      if (!user) {
        // If no user found with the given userId, return a 404 response
        return res.status(404).json({ message: 'User not found' })
      }
      
      // handle admin: security section request
      if (req.body.username && req.body.username.trim() !== '') {
        user.username = req.body.username
      }

      if (req.body.password && req.body.oldPassword) {
        const isOldPasswordValid = await bcrypt.compare(req.body.oldPassword, user.password)
  
        if (!isOldPasswordValid) {
          return res.status(400).json({ message: 'Invalid old password' })
        }
  
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user.password = hashedPassword
      }

      // handle admin: user section request
      if (req.body.firstName && req.body.firstName.trim() !== '') {
        user.firstName = req.body.firstName
      }

      if (req.body.lastName && req.body.lastName.trim() !== '') {
        user.lastName = req.body.lastName
      }
  
      if (req.body.bio && req.body.bio.trim() !== '') {
        user.bio = req.body.bio
      }

      if (req.body.contact) {
        const contact = req.body.contact
  
        if (contact.email && contact.email.trim() !== '') {
          user.contact.email = contact.email
        }
  
        if (contact.linkedin && contact.linkedin.trim() !== '') {
          user.contact.linkedin = contact.linkedin
        }
  
        if (contact.facebook && contact.facebook.trim() !== '') {
          user.contact.facebook = contact.facebook
        }
      }
  
      // handle admin: about section request
      if (req.body.about) {
        const aboutData = req.body.about
  
        if (aboutData.about && aboutData.about.trim() !== '') {
          user.about.about = aboutData.about
        }
  
        if (aboutData.homeDescription && aboutData.homeDescription.trim() !== '') {
          user.about.homeDescription = aboutData.homeDescription
        }
  
        if (aboutData.experiencedYears && aboutData.experiencedYears.trim() !== '') {
          user.about.experiencedYears = aboutData.experiencedYears
        }
  
        if (aboutData.happyClients && aboutData.happyClients.trim() !== '') {
          user.about.happyClients = aboutData.happyClients
        }

        if (aboutData.companiesWorked && aboutData.companiesWorked.trim() !== '') {
          user.about.companiesWorked = aboutData.companiesWorked
        }

        if (aboutData.resume && aboutData.resume.trim() !== '') {
            user.about.resume = aboutData.resume
        }
      }
  
      // Save the updated user
      await user.save()
  
      res.status(200).json({ message: 'Profile updated successfully' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}

/* DELETE API */
exports.deleteSkill = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const skillIndex = user.skills.findIndex(skill => skill._id.toString() === id)

        if (skillIndex === -1) {
            return res.status(404).json({ message: 'Skill not found' })
        }
        user.skills.splice(skillIndex, 1)
        await user.save()

        res.status(200).json({ message: 'Skill deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteService = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const serviceIndex = user.services.findIndex(service => service._id.toString() === id)

        if (serviceIndex === -1) {
            return res.status(404).json({ message: 'Service not found' })
        }
        user.services.splice(serviceIndex, 1)
        await user.save()

        res.status(200).json({ message: 'Service deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}