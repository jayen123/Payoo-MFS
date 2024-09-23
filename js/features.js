// Add Money Form Show
document
  .getElementById("add-money-form-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });

// cash out form Show
document
  .getElementById("cash-out-form-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });
