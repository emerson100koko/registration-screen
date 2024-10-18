const form = document.querySelector("form");

const Iname = document.querySelector(".name");
const Iaddress = document.querySelector(".address");
const Ipassword = document.querySelector(".password");
const Itel = document.querySelector(".tel");

function register() {
  fetch("http://localhost:8080/register", 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({
        name: Iname.value,
        address: Iaddress.value,
        password: Ipassword.value,
        phone: Itel.value
      })
  })
    .then(function (res) {console.log(res )})
    .catch(function (res) {console.log(res )})
};

function clear() {
      Iname.value = "";
      Iaddress.value = "";
      Ipassword.value = "";
      Itel.value = "";
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  register();
  clear();
});