function updateCase(isIncrease, caseInput) {
  const caseInputField = document.getElementById(caseInput);
  const previousCaseInput = parseInt(caseInputField.value);

  let newCaseInput;

  if (isIncrease) {
    newCaseInput = previousCaseInput + 1;
  } else {
    newCaseInput = previousCaseInput - 1;
  }

  newCaseInput = Math.abs(newCaseInput);
  caseInputField.value = newCaseInput;

  return newCaseInput;
}

function totalPrice(totalCase, casePrice, price) {
  const caseElement = document.getElementById(casePrice);
  const newCasePrice = price * totalCase;
  caseElement.innerText = newCasePrice;
  return newCasePrice;
}

// set element
function setElementValueById(element, value) {
  const previousSubTotal = document.getElementById(element);
  previousSubTotal.innerText = value;
}

// calculate subtotal
//calculate each total price
function getTextElementValue(elementId) {
  const totalElement = document.getElementById(elementId);
  const currentTotalElement = parseInt(totalElement.innerText);
  return currentTotalElement;
}

// calculate total price
function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValue("phone-price");
  const currentCaseTotal = getTextElementValue("case-price");

  const currentSubtotal = currentPhoneTotal + currentCaseTotal;
  setElementValueById("sub-total", currentSubtotal);

  let taxTotal = currentSubtotal * 0.1;
  taxTotal = Math.round(taxTotal);
  setElementValueById("tax-total", taxTotal);

  const finalTotal = currentSubtotal + taxTotal;
  setElementValueById("final-total", finalTotal);
}
