const Blog = require('../models/Blog')

/* CREATE API */
exports.createBlog = async(req, res)=>{
    try{
        // parse data from body
        const { category, title, description } = req.body

        // creating new blog using 'Blog' Model
        const newBlog = new Blog({
            category,
            title,
            description,
        })

        // saves newBlog
        await newBlog.save()

        res.status(201).json({ message: 'Blog created successfully', newBlog})
    }
    catch(error) {
        res.status(409).json({ message: error.message })
    }
}

/* READ API */
exports.getAllBlogs = async(req, res)=>{
    try {
        // get all the blogs from database
        const blogs = await Blog.find().sort({ createdAt: -1 }).exec()
        res.status(200).json({ blogs })
    }
    catch(error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getSpecificBlog = async(req, res)=>{
    // parse blogId as id from request body or query params
    const { id } = req.params

    try {
        const blog = await Blog.findById(id)
        res.status(200).json({ blog })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

/* UPDATE API */
exports.updateBlog = async (req, res) => {
    // Parse id from the URL
    const { id } = req.params
  
    try {
      // Get the blog of the specific id
      const blog = await Blog.findById(id)
      if (!blog) {
        // If no blog found with the given id, return a 404 response
        return res.status(404).json({ message: 'Blog not found' })
      }
      
      if (req.body.category && req.body.category.trim() !== '') {
        blog.category = req.body.category
      }

      if (req.body.title && req.body.title.trim() !== '') {
        blog.title = req.body.title
      }

      if (req.body.description && req.body.description.trim() !== '') {
        blog.description = req.body.description
      }
  
      // Save the updated blog
      await blog.save()
  
      res.status(200).json({ message: 'Blog updated successfully', blog })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}

/* DELETE API */
exports.deleteBlog = async (req, res) => {
    try {
      // Parse blog's id from url
      const { id } = req.params

      // Find the blog of specific id
      const blog = await Blog.findById(id)
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' })
      }
  
      // Delete the blog
      await blog.deleteOne()
  
      res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}