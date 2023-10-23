const submit = document.querySelector("#submit");
const overlay = document.querySelector("#overlay");

submit.addEventListener("click", function (event) {
  localStorage.setItem("gated", true);
  overlay.style.display = "none";
});

if (localStorage.getItem("gated")) {
  overlay.style.display = "none";
} else {
  overlay.style.display = "flex";
}
