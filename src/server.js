const express = require('express');
const cors = require('cors');

const PORT = 3002;


const performOperation = (op, operand1, operand2) => {
  switch (op) {
    case 'ADD':
      return operand1 + operand2;
    case 'SUBTRACT':
      return operand1 - operand2;
    case 'MULTIPLY':
      return operand1 * operand2;
    case 'DIVIDE':
      return operand1 / operand2;
    default:
      return NaN;
  }
};

const server = express();
server.use(cors());

server.get('/:op/:operand1/:operand2/', (req, res) => {
  const op = req.params.op;
  const operand1 = Number(req.params.operand1);
  const operand2 = Number(req.params.operand2);
  console.log(`Received message: ${op}, ${operand1}, ${operand2}`);
  res.status(200).json({ result: performOperation(op,operand1,operand2) })
});

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
