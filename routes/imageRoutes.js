// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const upload = require('../middleware/upload');

router.get('/photos', imageController.getAllImages);
router.get('/photos/id', imageController.getImagesById);
router.post('/photos', upload, imageController.createImage);
router.put('/photos/:id', imageController.updateImage);
router.delete('/photos/:id', imageController.deleteImage);

module.exports = router;
