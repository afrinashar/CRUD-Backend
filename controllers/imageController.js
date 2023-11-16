// controllers/imageController.js
const Image = require('../models/Image');

const imageController = {
  getAllImages: async (req, res) => {
    try {
      const { page = 1, limit = 10, sort, search } = req.query;

      const query = {};
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ];
      }
  
      const images = await Image.find(query)
        .sort(sort)
        .limit(parseInt(limit))
        .skip((page - 1) * limit);
      res.json(images);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
  getImagesById: async (req, res) => {
    try {
      const images = await Image.findById();
      res.json(images);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
  createImage: async (req, res) => {
    const { first_name,
      last_name,
      email,
      is_verified,
      image_url,
      description, } = req.body;

    try {
      const newImage = new Image({ first_name,
        last_name,
        email,
        is_verified,
        image_url,
        description, });
      await newImage.save();
      res.json(newImage);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  updateImage: async (req, res) => {
    const { first_name,
      last_name,
      email,
      is_verified,
      image_url,
      description, } = req.body;

    try {
      const updatedImage = await Image.findByIdAndUpdate(req.params.id, { first_name,
        last_name,
        email,
        is_verified,
        image_url,
        description, }, { new: true });
      res.json(updatedImage);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  deleteImage: async (req, res) => {
    try {
      await Image.findByIdAndRemove(req.params.id);
      res.json({ msg: 'Image removed' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = imageController;
