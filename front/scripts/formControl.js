import { postMovie, fetchData } from "./services.js"; // Asegúrate de importar también fetchData

const formValidation = () => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      async (event) => { // <-- ¡Importante! Haz que la función sea asíncrona
         console.log("¡El formulario se está intentando enviar!");
        event.preventDefault();
        
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

          await postMovie(newMovie); // <-- Espera a que la solicitud termine
          fetchData(); // <-- Vuelve a cargar los datos para actualizar la vista
        }
      },
      false
    );
  });
};

export { formValidation };
