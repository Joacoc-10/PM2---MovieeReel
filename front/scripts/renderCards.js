const renderCards = (data) => {
  const contenedorPeliculas = document.querySelector('#contenedor_peliculas');

  if (!contenedorPeliculas){
    console.log('El contenedor de peliculas no existe en el DOM')
    return;
  }
  data.forEach((pelicula) => {
    const divContenedorTarjetas = document.createElement('div');
    divContenedorTarjetas.classList.add('tarjeta_pelis');
  
    const tituloPeli = document.createElement('h3');
    tituloPeli.innerHTML = pelicula.title;
  
    const posterPeli = document.createElement('img');
    posterPeli.src = pelicula.poster;
  
    const anoPeli = document.createElement('p');
    anoPeli.innerHTML = `Año: ${pelicula.year}`;
  
    const directorPeli = document.createElement('p');
    directorPeli.innerHTML = `Director: ${pelicula.director}`;
  
    const duracionPeli = document.createElement('p');
    duracionPeli.innerHTML =`Duración: ${pelicula.duration}`;
  
    const generoPeli = document.createElement('p');
    generoPeli.innerHTML =`Genero: ${pelicula.genre}`;
  
    const ratePeli = document.createElement('p');
    ratePeli.innerHTML = `Puntuacion: ${pelicula.rate}`;
  
  
    const divContenedorInfo = document.createElement('div'); 
    divContenedorInfo.classList.add('info_pelicula');
    divContenedorInfo.appendChild(anoPeli);
    divContenedorInfo.appendChild(directorPeli);
    divContenedorInfo.appendChild(duracionPeli);
    divContenedorInfo.appendChild(generoPeli);
    divContenedorInfo.appendChild(ratePeli);
  
    const divTituloInfoContainer = document.createElement('div');
    divTituloInfoContainer.classList.add('titulo_info_container');
    divTituloInfoContainer.appendChild(tituloPeli);
    divTituloInfoContainer.appendChild(divContenedorInfo);
  
    divContenedorTarjetas.appendChild(posterPeli);
    divContenedorTarjetas.appendChild(divTituloInfoContainer);

    contenedorPeliculas.appendChild(divContenedorTarjetas);
  });  
}

module.exports = {renderCards}