let display = document.getElementById('display');

function appendValue(value) {
  const currentValue = display.textContent;
  const lastChar = currentValue.slice(-1);


  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
    return;
  }

  
  if (currentValue === '' && ['+', '*', '/'].includes(value)) {
    return;
  }

  
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}

function calculate() {
  try {
    const expression = display.textContent;

  
    if (!expression || ['+', '-', '*', '/'].includes(expression.slice(-1))) {
      display.textContent = 'Error';
      return;
    }


    display.textContent = eval(expression);
  } catch (e) {
    display.textContent = 'Error';
  }
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}
