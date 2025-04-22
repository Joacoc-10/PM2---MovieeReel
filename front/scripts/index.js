console.log(tempData);



function crearTarjetasPeliculas(pelicula){

  const divContenedorTarjetas = document.createElement('div');
  const tituloPeli = document.createElement('h3');
  const anoPeli = document.createElement('p');
  const directorPeli = document.createElement('p');
  const duracionPeli = document.createElement('p');
  const generoPeli = document.createElement('p');
  const ratePeli = document.createElement('p');
  const posterPeli = document.createElement('img');
  const divContenedorInfo = document.createElement('div'); //

  tituloPeli.innerHTML = pelicula.title;
  posterPeli.src = pelicula.poster;
  directorPeli.innerHTML = `Director: ${pelicula.director}`;
  anoPeli.innerHTML = `Año: ${pelicula.year}`;
  duracionPeli.innerHTML =`Duración: ${pelicula.duration}`;
  generoPeli.innerHTML =`Genero: ${pelicula.genre}`;
  ratePeli.innerHTML = `Puntuacion: ${pelicula.rate}`;

  divContenedorTarjetas.classList.add('tarjeta_pelis');
  divContenedorInfo.classList.add('info_pelicula');
 
 
  // tituloPeli.classList.add('info_pelicula');
  // anoPeli.classList.add('info_pelicula');
  // directorPeli.classList.add('info_pelicula');
  // duracionPeli.classList.add('info_pelicula');
  // generoPeli.classList.add('info_pelicula');
  // ratePeli.classList.add('info_pelicula');
  divContenedorInfo.appendChild(anoPeli);
  divContenedorInfo.appendChild(directorPeli);
  divContenedorInfo.appendChild(duracionPeli);
  divContenedorInfo.appendChild(generoPeli);
  divContenedorInfo.appendChild(ratePeli);

  divContenedorTarjetas.appendChild(tituloPeli);
  divContenedorTarjetas.appendChild(posterPeli);
  divContenedorTarjetas.appendChild(divContenedorInfo);
  // divContenedorTarjetas.appendChild(directorPeli);
  // divContenedorTarjetas.appendChild(generoPeli);
  // divContenedorTarjetas.appendChild(anoPeli);
  // divContenedorTarjetas.appendChild(duracionPeli);
  // divContenedorTarjetas.appendChild(ratePeli);

  return divContenedorTarjetas 
  }

  const contenedorPeliculas = document.getElementById('contenedor_peliculas');


  const tarjetasDOM = tempData.map(pelicula => crearTarjetasPeliculas(pelicula));
  tarjetasDOM.forEach(tarjeta => {
  contenedorPeliculas.appendChild(tarjeta);
  })

