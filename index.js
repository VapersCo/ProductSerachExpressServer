require('dotenv').config();
const express = require('express');

// Import the supplier route (we’ll create it as routes/supplier.js)
const supplierRoutes = require('./routes/supplier');

const app = express();

// Allow JSON request bodies
app.use(express.json());

// Use the supplier route under /api/supplier
app.use('/api/supplier', supplierRoutes);

// Health check / root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
