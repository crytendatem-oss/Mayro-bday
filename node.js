document.addEventListener('DOMContentLoaded', () => {
});

const musica = new Audio("cositos/pinkbubblegum.mp3");
const imagen = document.getElementById("sonido")

imagen.addEventListener('click', () => {
     musica.play()
       .then(() => console.log("Reproduciendo desde la imagen"))
       .catch(err => console.error("Error al reproducir:", err));
});
