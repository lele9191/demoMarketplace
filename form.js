var loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {
  event.preventDefault(); // avoid to load the page
  var spinner = document.createElement("i");
  spinner.classList.add("fa", "fa-spinner", "fa-spin");
  loginButton.innerHTML = " Loading";
  loginButton.prepend(spinner);
  setTimeout(() => {
    loginButton.remove();
    var successfulLabel = document.createElement("div");
    successfulLabel.innerHTML = "LOGIN SUCCESSFUL!";
    successfulLabel.classList.add("successLabel");
    document.getElementById("IndexForm").appendChild(successfulLabel);
  }, 3000);
});
