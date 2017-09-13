const express = require('express');
const cors = require('cors');

const PORT = 3002;


const performOperation = (op, operand1, operand2) => {
  let result;
  switch (op) {
    case 'ADD':
      result = +operand1 + +operand2;
      break;
    case 'SUBTRACT':
      result = operand1 - operand2;
      break;
    case 'MULTIPLY':
      result = operand1 * operand2;
      break;
    case 'DIVIDE':
      result = operand1 / operand2;
      break;
    default:
      result = NaN;
  }
  return result;
};

const server = express();
server.use(cors());

server.get('/:op/:operand1/:operand2/', (req, res) => {
  let op = req.params.op;
  let operand1 = req.params.operand1;
  let operand2 = req.params.operand2;
  console.log(`Received message: ${op}, ${operand1}, ${operand2}`);
  res.status(200).json({ result: performOperation(op,operand1,operand2) })
});

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
