
class Activity {
  constructor (id, titulo, director, ano, poster, valoracion, duracion, generos){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.ano = ano;
    this.poster = poster;
    this.valoracion = valoracion;
    this.duracion = duracion;
    this.generos = generos;
  }
}

class Repository{
  constructor(){
    this.activities = [];
    this.nextId = 1;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(titulo, director, ano, poster, valoracion, duracion, generos){
    const newActivity = new Activity (this.nextId, titulo, director, ano, poster, valoracion, duracion, generos);
    this.activities.push(newActivity);
    this.nextId++;
    return newActivity;
  }
}

function crearTarjetaPelicula(activity){
  const {titulo, director, ano, poster, valoracion, duracion, generos} = activity;

  const divContenedorTarjeta = document.createElement('div');
  divContenedorTarjeta.classList.add('contenedor_peliculas');

  const tituloPeli = document.createElement('h3');
  tituloPeli.textContent = titulo;

  const posterUrl = document.createElement('img');
  posterUrl.src = poster;
  posterUrl.alt = `Póster de ${titulo}`;

  const directorPeli = document.createElement('p');
  directorPeli.textContent = `Director: ${director}`;

  const anoPeli = document.createElement('p');
  anoPeli.textContent = `Año: ${ano}`;

  const valoracionPeli = document.createElement('p');
  valoracionPeli.textContent = `Valoración: ${valoracion}`;

  const duracionPeli = document.createElement('p');
  duracionPeli.textContent = `Duración: ${duracion}`;

  const generosPeli = document.createElement('p');
  generosPeli.textContent = `Géneros: ${generos.join(', ')}`;

  divContenedorTarjeta.appendChild(tituloPeli);
  divContenedorTarjeta.appendChild(posterUrl);
  divContenedorTarjeta.appendChild(directorPeli);
  divContenedorTarjeta.appendChild(anoPeli);
  divContenedorTarjeta.appendChild(valoracionPeli);
  divContenedorTarjeta.appendChild(duracionPeli);
  divContenedorTarjeta.appendChild(generosPeli);

  return divContenedorTarjeta;
}

const contenedorPeliculas = document.getElementById('tarjetas_peliculas');
const activityRepository = new Repository();

function renderizarPeliculas(){
  contenedorPeliculas.innerHTML = ''; 

  const listadoPeliculas = activityRepository.getAllActivities();
  const elementosHTML = listadoPeliculas.map(activity => crearTarjetaPelicula(activity));

  elementosHTML.forEach(elemento => {
    contenedorPeliculas.appendChild(elemento);
  });
}

const formulario = document.querySelector('.caja_comentario');
const botonCrear = formulario.querySelector('button[type="button"]');

botonCrear.addEventListener('click', (event) => {

  const titulo = document.getElementById('tituloId').value;
  const director = document.getElementById('directorId').value;
  const ano = document.getElementById('anoId').value;
  const poster = document.getElementById('posterId').value;
  const valoracion = document.getElementById('valoracionId').value;
  const duracion = document.getElementById('duracionId').value;

  const checkboxesGenero = formulario.querySelectorAll('input[type="checkbox"]:checked');
  const generos = Array.from(checkboxesGenero).map(checkbox => checkbox.value);

  activityRepository.createActivity(titulo, director, ano, poster, valoracion, duracion, generos);
  renderizarPeliculas();

  formulario.reset();
});

