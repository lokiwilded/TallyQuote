// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Service = require('./models/Service');
const servicesData = require('./data/servicesData'); // Import service data

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = "mongodb+srv://lokiwilde:Smurfb0y!23@tallyquote.ozyao.mongodb.net/?retryWrites=true&w=majority&appName=TallyQuote";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// Route to insert all services into the database
app.post('/api/services/insert-all', async (req, res) => {
  try {
    const insertedServices = await Service.insertMany(servicesData);
    res.json({ message: "Services inserted successfully", insertedServices });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
