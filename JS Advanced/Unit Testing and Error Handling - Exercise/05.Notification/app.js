function notify(message) {
  const divId = document.getElementById("notification");
  divId.textContent = message;
  divId.style.display = "block";
  divId.addEventListener('click', hide);
  function hide(e) {
    divId.style.display = "none";
  }
}