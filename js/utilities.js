function getInputValueByID(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function setNewBalance(amount) {
  document.getElementById("current-balance").innerText = amount;
}

function showSectionById(id) {
  // hide other all
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");
  // show provided id
  document.getElementById(id).classList.remove("hidden");
}

function createTransactionHistory(transaction) {
  document.getElementById("transaction-container").appendChild(transaction);
}
