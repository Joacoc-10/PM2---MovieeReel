import { formValidation } from "./formControl";
import { fetchData } from "./services";

document.addEventListener("DOMContentLoaded", () => {
  formValidation();
  fetchData();
});
