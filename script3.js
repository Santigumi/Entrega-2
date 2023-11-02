import { getData, Favoritos } from "./Utils3.js"; 

const render = async () => {
  const data = await getData(); 
  console.log(data);
  const contenedor = document.querySelector(".Contenedor"); 

  for (const favoritos of data) { 
    const item = new Favoritos(favoritos.imagen, favoritos.nombre, favoritos.corazon); 
    const favoritosDiv = item.render(); 

    contenedor.appendChild(favoritosDiv); 
  }
}

render(); 
