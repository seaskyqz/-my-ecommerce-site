const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/subject', require('./routes/subject'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/subscribe', require('./routes/subscribe'));

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
