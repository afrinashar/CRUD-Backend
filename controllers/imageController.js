// controllers/imageController.js
const Image = require('../models/Image');

const imageController = {
  getAllImages: async (req, res) => {
    try {
      const { page = 1, limit = 50, sort, search } = req.query;

      const query = {};
      if (search) {
        query.$or = [
          { firstName: { $regex: search, $options: 'i' } },
          { isVerified, email, lastName,description: { $regex: search, $options: 'i' } },
        ];
      }
  
      const images = await Image.find(query)
        .sort(sort)
        .limit(parseInt(limit))
        .skip((page - 1) * limit);
      res.json(images);
    } catch (err) {
   //   req.flash('error_msg', 'Server Error');
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
  getImagesById: async (req, res) => {

    try {
      console.log(req.params.id);
      const images = await Image.findById(req.params.id);
      res.json(images);
    } catch (err) {
   //   req.flash('error_msg', 'Server Error');
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
  createImage: async function(req, res)  {
    const { firstName, isVerified, email, lastName,description,imageUrl } = req.body;
   // console.log(req.body);
    //const   image  = req.file.imageUrl;
    
    try {
      const duplicate = Image.find(email)
      console.log(duplicate,"good");
      if(!duplicate){
        res.status(208).send("email already exist");
      }
      const newImage = new Image({ firstName, isVerified, email, lastName,description, imageUrl  });
      await newImage.save();
      res.json(newImage);
    //  req.flash('success_msg', 'Image uploaded successfully');
    } catch (err) {
     // req.flash('error_msg', 'Server Error');
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  updateImage: async (req, res) => {
    const { firstName, isVerified, email, lastName,description,imageUrl } = req.body;

    try {
      
        const duplicate = Image.find(email)
        console.log(duplicate,"good");
        if(!duplicate){
          res.status(304 ).send("email already exist");
        }
      const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body);
      res.json(updatedImage);
  //    req.flash('success_msg', 'Image updated successfully');
    } catch (err) {
   //   req.flash('error_msg', 'Server Error');
      console.error(err);
      res.status(500).send(err);
    }
  },

  deleteImage: async (req, res) => {
    try {
      await Image.findByIdAndRemove(req.params.id);
      res.json({ msg: 'Image removed' });
   //   req.flash('success_msg', 'Image removed successfully');
    } catch (err) {
   //   req.flash('error_msg', 'Server Error');
      console.error(err);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = imageController;
