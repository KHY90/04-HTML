document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    let currentInput = '';
    let operator = null;
    let previousInput = '';
  
    const updateScreen = (value) => {
      screen.value = value;
    };
  
    const clearScreen = () => {
      currentInput = '';
      operator = null;
      previousInput = '';
      updateScreen('');
    };
  
    const handleNumberClick = (number) => {
      currentInput += number;
      updateScreen(currentInput);
    };
  
    const handleOperatorClick = (op) => {
      if (currentInput === '') return;
      if (previousInput !== '') {
        calculate();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    };
  
    const calculate = () => {
      let result;
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);
      if (isNaN(prev) || isNaN(curr)) return;
      switch (operator) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          result = prev / curr;
          break;
        default:
          return;
      }
      currentInput = result.toString();
      operator = null;
      previousInput = '';
      updateScreen(currentInput);
    };
  
    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', () => handleNumberClick(button.dataset.number));
    });
  
    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', () => handleOperatorClick(button.dataset.operator));
    });
  
    document.getElementById('equal').addEventListener('click', calculate);
  
    document.getElementById('clear').addEventListener('click', clearScreen);
  });
  