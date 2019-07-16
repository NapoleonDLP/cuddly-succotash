const express = require('express');
const app = express();
const port = 4578;
const db = require('./db.js');

app.get('/', (req, res) => res.send(`Server says, 'Hello world!', from port ${port} `));

app.listen(port, () => console.log(`listening to port ${port}`));
