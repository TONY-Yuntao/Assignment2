const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const config = require('./config');
const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());



mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));



app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore Application.' });
});


app.listen(8080)


console.log('Server running at http://localhost:8080/');