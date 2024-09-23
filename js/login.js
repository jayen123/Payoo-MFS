document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const loginPin = document.getElementById("login-pin").value;

    if (phoneNumber === "5" && loginPin === "1234") {
      window.location.href = "/home.html";
    } else {
      alert("wrong phone number or pin");
    }
  });
