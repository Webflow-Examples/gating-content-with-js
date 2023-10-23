const submit = document.querySelector("#submit");
const dialog = document.querySelector("#dialog"); // Assuming your dialog has an id of 'dialog'

submit.addEventListener("click", function (event) {
  localStorage.setItem("gated", true);
  dialog.close();
});

if (localStorage.getItem("gated")) {
  dialog.close();
} else {
  dialog.showModal();
}
