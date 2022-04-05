class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

//document.querySelector = selects the 1st element with that tag
//document.querySelectorAll = selects ALL elements with that tag

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
// = new is to grab a class I guess?

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //addEventListener enables multiple functions upon one event.
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
