'use strict'

const button = document.getElementById("okButton");
button.addEventListener("click", function () {
  document.getElementById("delete").hidden = true;
  document.getElementById("sure").hidden = false;
}, false);