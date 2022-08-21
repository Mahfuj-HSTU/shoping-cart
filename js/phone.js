// phone calculation
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newCaseInput = updateCase(true, "phone-input");

    totalPrice(newCaseInput, "phone-price", 1219);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newCaseInput = updateCase(false, "phone-input");

    totalPrice(newCaseInput, "phone-price", 1219);
    calculateSubTotal();
  });
