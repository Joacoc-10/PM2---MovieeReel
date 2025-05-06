const {postMovie} = require('./services')

const createMovie = event => {
  
  event.preventDefault()
  const errorSections = document.querySelector('.errors')
  const selectedGenres = Array.from(
    document.querySelectorAll('input[name="genre"]:checked')
  ).map(checkbox => checkbox.value)

  let errores = []
  let hasError = false

  const newMovie = {
    title: document.querySelector('#title').value,
    rate: document.querySelector('#rate').value,
    duration: document.querySelector('#duration').value,
    poster: document.querySelector('#poster').value,
    director: document.querySelector('#director').value,
    year: document.querySelector('#year').value,
    genre: selectedGenres,
  }
  console.log(newMovie)
  let regexDuration = /^\d=h\s\d{1,2}min$/
  let regexImageUrl = /\.(jpg|png|webp)$/
  if (!newMovie.title) {
    errores.push('El titulo es requerido')
  }
  if (!newMovie.rate) {
    errores.push('El rating es requerido')
  }
  if (!regexImageUrl.test(newMovie.poster)) {
    errores.push('La url de la imagen debe tener un formato valido')
  }
  if (newMovie.year < 1900 || newMovie.year > 2026) {
    errores.push('El ańo no es valido')
  }
  if (!regexDuration.test(newMovie.duration)) {
    errores.push('El formato de la duracion no es valido')
  }
  if (errores.length > 0) {
    errorSections.innerHTML = ''
    const ul = document.createElement('ul')
    errorSections.appendChild(ul)
    errores.forEach(err => {
      const li = document.createElement('li')
      li.textContent = err
      ul.appendChild(li)
    })
    return
  }
 postMovie(newMovie)

}

module.exports = {createMovie}