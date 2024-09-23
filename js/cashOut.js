document.getElementById("cashOut").addEventListener("click", function (event) {
  event.preventDefault();

  const cashOutNumber = getInputValueByID("input-cash-Out");
  const pinNumber = getInputValueByID("input-pin-cashOut");
  const currentBalance = getTextValueById("current-balance");

  if (isNaN(cashOutNumber)) {
    alert("Failed To Cash Out!");
    return;
  }

  if (pinNumber !== 1234) {
    alert("Failed to Cash out! please try again later");
  }

  if (cashOutNumber > currentBalance) {
    alert("You Do not have enough Money!");
    return;
  }

  const newBalance = currentBalance - cashOutNumber;

  setNewBalance(newBalance);

  const p = document.createElement("p");
  p.innerText = `Cash Out ${cashOutNumber} tk. new Balance is ${newBalance}`;
  createTransactionHistory(p);
});
