const express = require('express');
const mongoose = require('mongoose');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/celebrity', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the static directory for uploads
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Set up routes
app.use(imageRoutes);

// Set up the port for the server to run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
