require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ Add this line

// Import the supplier route
const supplierRoutes = require('./routes/supplier');

const app = express();

// ✅ Allow CORS (so Bubble/Hoppscotch can call the API)
app.use(cors());

// ✅ Parse JSON and form-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Use the supplier route under /api/supplier
app.use('/api/supplier', supplierRoutes);

// ✅ Health check / root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running!' });
});

// ✅ Start the server
const PORT = process.env.PORT || 10000; // Use 10000 (Render auto-assigns this)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
