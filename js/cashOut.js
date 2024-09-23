document.getElementById("cashOut").addEventListener("click", function (event) {
  event.preventDefault();

  const cashOutNumber = getInputValueByID("input-cash-Out");
  const pinNumber = getInputValueByID("input-pin-cashOut");

  const currentBalance = document.getElementById("current-balance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);

  if (pinNumber !== 1234) {
    alert("Failed to Cash out! please try again later");
  }

  const newBalance = currentBalanceNumber - cashOutNumber;

  document.getElementById("current-balance").innerText = newBalance;
});
