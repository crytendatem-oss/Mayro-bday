document.addEventListener('DOMContentLoaded', () => {

    const musica = new Audio("cositos/pinkbubblegum.mp3");
    const imagen = document.getElementById("sonido");

    if (imagen) {
        imagen.addEventListener('click', () => {
            musica.play()
                .then(() => console.log("Reproduciendo desde la imagen"))
                .catch(err => console.error("Error al reproducir:", err));
        });
    } else {
        console.error("No se encontró el elemento con id 'sonido'");
    }

});
