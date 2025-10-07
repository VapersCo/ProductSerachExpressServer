// routes/supplier.js
const express = require('express');
const router = express.Router();

// POST /api/supplier/search
router.post('/search', (req, res) => {
  // Safely read the body (in case it's missing or not JSON)
  const body = req.body || {};

  // Extract and sanitize inputs
  const brand = (body.brand || '').toString().trim();
  const model = (body.model || body.description || '').toString().trim();

  // Basic validation for missing fields
  if (!brand) {
    return res.status(400).json({ error: 'brand is required' });
  }

  if (!model) {
    return res.status(400).json({ error: 'model is required' });
  }

  // Dummy JSON response (replace later with actual supplier data)
  const dummyResult = {
    supplier: "Sinclair",
    title: `Dummy result for ${brand} ${model}`,
    sku: "DUMMY-SKU",
    price_native: 10,
    currency: "CAD",
    product_url: "https://sinclairdental.com/dummy",
    image_url: "https://via.placeholder.com/150",
    description: "This is a dummy description",
    confidence_score: 0.5
  };

  // Send response
  return res.json(dummyResult);
});

module.exports = router;
