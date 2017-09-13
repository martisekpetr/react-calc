const express = require('express');
const cors = require('cors');

const PORT = 3002;

const server = express();
server.use(cors());

server.get('/', (req, res) => res.status(200).json({ status: 'ok' }));

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
