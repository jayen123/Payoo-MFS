document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  const addMoney = getInputValueByID("input-add-money");
  const pinNumber = getInputValueByID("input-pin");
  const currentBalance = getTextValueById("current-balance");

  if (isNaN(addMoney)) {
    alert("Failed To Add Money!");
    return;
  }

  if (pinNumber !== 1234) {
    alert("Failed to add Money! Please try again later");
  }

  const newBalance = currentBalance + addMoney;

  setNewBalance(newBalance);

  const p = document.createElement("p");
  p.innerText = `Add Money ${addMoney} tk. new Balance is ${newBalance}`;
  createTransactionHistory(p);
});
