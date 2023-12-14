const express = require('express');
const mongoose = require('mongoose');
const ImageRoutes = require('./routes/imageRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
var cors = require('cors');
//const flash = require('express-flash');
const app = express();
//const passport = require('./config/passport');
const session = require('express-session');

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/celebrity', {
  
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
// Set up express-session and express-flash
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));


app.use(ImageRoutes);
app.use(userRoutes);

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
 
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
