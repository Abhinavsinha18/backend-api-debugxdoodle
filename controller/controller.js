// const { default: app } = require("../config/firebase");
const connect = require("../database/db");
const Model = require("../model/model");
const multer = require('multer');


const GetBlogs = async (req, res) => {
  try {
    await connect;
    const blogs = await Model.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Post Record

const PostBlog = async (req, res) => {
  try {
    const data = new Model(req.body);
    await data.save();
    res.status(201).json({ message: "Data Created", Status: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const PostBlog = async (req, res) => {
//   try {
//     console.log('Request Body:', req.body);
//     console.log('Uploaded Files:', req.files);

//     // Extract fields from req.body
//     const {
//       content,
//       keywords,
//       twitterDescription,
//       twitterTitle,
//       fbDescription,
//       fbTitle,
//       metaDescription,
//       metaTitle,
//       subTitle,
//       title,
//       tags,
//     } = req.body;

//     // Check for missing fields
//     if (
//       !content ||
//       !keywords ||
//       !twitterDescription ||
//       !twitterTitle ||
//       !fbDescription ||
//       !fbTitle ||
//       !metaDescription ||
//       !metaTitle ||
//       !subTitle ||
//       !title ||
//       !tags
//     ) {
//       return res.status(400).json({ error: 'All fields are required.', Status: false });
//     }

//     // Convert `tags` to an array if needed
//     const tagArray = tags.split(',').map((tag) => tag.trim());

//     // Extract file paths
//     const image = req.files?.image?.[0]?.path || '';
//     const fbImage = req.files?.fbImage?.[0]?.path || '';
//     const twitterImage = req.files?.twitterImage?.[0]?.path || '';

//     // Create a new document in MongoDB
//     const data = new Model({
//       content,
//       keywords,
//       tags: tagArray,
//       twitterDescription,
//       twitterTitle,
//       fbDescription,
//       fbTitle,
//       metaDescription,
//       metaTitle,
//       subTitle,
//       title,
//       image,
//       fbImage,
//       twitterImage,
//     });

//     await data.save();

//     res.status(201).json({ message: 'Data Created', Status: true, data });
//   } catch (error) {
//     console.error(error.message);
//     res.status(400).json({ error: error.message });
//   }
// };
// Delete Record

const DeleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Model.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ message: "Record deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Record

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ message: "Record Updated", Status: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    GetBlogs,
  PostBlog,
  DeleteBlog,
  updateBlog,
};