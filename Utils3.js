export async function getData() {
  const response = await fetch("https://raw.githubusercontent.com/Santigumi/Entrega-2/main/data3.json");
  const data = await response.json();

  if (data && data.favoritos && Array.isArray(data.favoritos)) {
    return data.favoritos.map(item => {
      return new Favoritos(item.imagen, item.nombre, item.corazón);
    });
  } else {
    console.error("Los datos no se cargaron correctamente.");
    return [];
  }
}


export class Favoritos {
  constructor(imagen, nombre, corazón) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.corazon = corazón;
  }

  render() {
    const objeto = document.createElement("div");
    objeto.className = "objeto";
  
    const item = document.createElement("div");
    item.className = "item";
  
    const imagen = document.createElement("div");
    imagen.className = "imagen";
  
    const espacio = document.createElement("div");
    espacio.className = "espacio";
    espacio.innerHTML = this.nombre;
  
    const imgCorazon = document.createElement("img");
    imgCorazon.src = this.corazon;
  
    const img = document.createElement("img");
    img.src = this.imagen;
  
    const enlace = document.createElement("a");
    enlace.href = "./Personaje.html"; 
  
    objeto.appendChild(item);
    objeto.appendChild(enlace); 
    imagen.appendChild(img);
    item.appendChild(imagen);
  
    espacio.appendChild(imgCorazon);
  
    item.appendChild(espacio);
  
    return objeto;
  }
}
