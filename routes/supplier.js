const express = require('express');
const router = express.Router();

// POST /api/supplier/search
router.post('/search', (req, res) => {
  const query = req.body;  // Expect JSON: { brand, model, packSize, keywords }

  // Dummy (stub) response: just echoing back something
  const dummyResult = {
    supplier: 'Sinclair',
    title: `Dummy result for ${query.brand || ''} ${query.model || ''}`,
    sku: 'DUMMY-SKU',
    price_native: 10.0,
    currency: 'CAD',
    product_url: 'https://sinclairdental.com/dummy',
    image_url: 'https://via.placeholder.com/150',
    description: 'This is a dummy description',
    confidence_score: 0.5
  };

  res.json(dummyResult);
});

module.exports = router;
