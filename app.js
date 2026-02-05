const express = require('express');
const app = express();
app.get('/api/users', (req, res) => {
res.json({ users: [] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

module.exports = app;