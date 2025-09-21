import { postMovie } from "./services.js";

const formValidation = () => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        
        // CORRECCIÓN: Declara la variable aquí para que siempre esté definida
        let hasError = false; 

        if (!form.checkValidity()) {
          event.stopPropagation();
          hasError = true;
        }

        form.classList.add("was-validated");

        const selectedGenres = Array.from(
          document.querySelectorAll('input[name="genre"]:checked')
        ).map((checkbox) => checkbox.value);

        const genreError = document.getElementById("genre-error");

        if (selectedGenres.length === 0) {
          genreError.textContent = "Por favor, selecciona al menos un género.";
          genreError.classList.add("text-danger");
          hasError = true;
        } else {
          genreError.textContent = "";
          genreError.classList.remove("text-danger");
        }
        
        if (!hasError) {
          const newMovie = {
            title: document.querySelector("#tituloId").value,
            rate: document.querySelector("#valoracionId").value,
            duration: document.querySelector("#duracionId").value,
            poster: document.querySelector("#posterId").value,
            director: document.querySelector("#directorId").value,
            year: document.querySelector("#anoId").value,
            genre: selectedGenres,
          };
          postMovie(newMovie);
        }
      },
      false
    );
  });
};

export { formValidation };
