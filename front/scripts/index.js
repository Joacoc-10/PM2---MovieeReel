const { formValidation } = require("./formControl");
const { fetchData } = require("./services");

document.addEventListener("DOMContentLoaded", () => {
  formValidation();
  fetchData();
});
