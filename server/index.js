const express = require('express');
const path = require('path');

const app = express();
const staticFilesPath = path.resolve(__dirname, './public');
app.use('/', express.static(staticFilesPath));

// my-app.com/list <- BROWSER HISTORY
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.resolve(staticFilesPath, 'index.html'));
});
// my-app.com/#/list <-- HASH HISTORY NO hace falta lo de arriba

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
