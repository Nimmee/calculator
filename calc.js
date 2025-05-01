// DOM selection
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

// Variable to hold the current calculation
let currentInput = '';

// Event listeners for number and operator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    
    if (value) {
      currentInput += value;
      result.value = currentInput;
    }
  });
});

// Event listener for the clear button
clearBtn.addEventListener('click', () => {
  currentInput = '';
  result.value = '';
});

// Event listener for the equals button
equalsBtn.addEventListener('click', () => {
  try {
    // Evaluate the input expression
    currentInput = eval(currentInput).toString();
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
    currentInput = '';
  }
});
