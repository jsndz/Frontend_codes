const form = document.getElementById("form");
const nameid = document.getElementById("name");
const passwordid = document.getElementById("password");
const errorElement = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let message = [];
  if (nameid.value == "" || passwordid.value == "") {
    message.push("Empty Fields");
  } else if (passwordid.value.length <= 6) {
    message.push("Too small");
  }
  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(",");
  }
});
