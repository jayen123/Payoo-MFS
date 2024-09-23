document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  let addMoney = getInputValueByID("input-add-money");
  const pinNumber = getInputValueByID("input-pin");

  const currentBalance = document.getElementById("current-balance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);

  if (pinNumber !== 1234) {
    alert("Failed to add Money! Please try again later");
  }

  const newBalance = currentBalanceNumber + addMoney;

  document.getElementById("current-balance").innerText = newBalance;

});
