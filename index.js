const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Express server is running!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
