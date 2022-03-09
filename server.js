const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
