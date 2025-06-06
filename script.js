function sendMessage() {
  const name = document.getElementById("name").value;
  alert("Thanks for your message, " + name + "!");
  return false; // prevent page reload
}