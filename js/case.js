// case calculation
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseInput = updateCase(true, "case-input");

  totalPrice(newCaseInput, "case-price", 59);
  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseInput = updateCase(false, "case-input");

    totalPrice(newCaseInput, "case-price", 59);
    calculateSubTotal();
  });
