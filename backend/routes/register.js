const express = require('express');
const fs      = require('fs');
const path    = require('path');
const router  = express.Router();
const dataPath = path.join(__dirname, '..', 'data', 'user.json');

router.post('/', (req, res) => {
  const { username, password, email, occupationCategory, occupation } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Incomplete information filled in' });
  }

  
  const users = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  if (users.some(u => u.email === email)) {
    return res.status(400).json({ error: 'This email has already been registered.' });
  }

  const newUser = {
    registeredAt: new Date().toISOString(),
    username,
    password,
    email,
    occupationCategory,
    occupation
  };

  users.push(newUser);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf8');

  res.json({ message: 'Successfully applied', user: newUser });
});

module.exports = router;
