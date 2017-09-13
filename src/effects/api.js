
export const getResult = (operation, operand1, operand2) => fetch(`http://localhost:3002/${operation}/${operand1}/${operand2}/`)
    .then(response => response.json());


