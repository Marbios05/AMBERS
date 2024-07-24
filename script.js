function startAdventure() {
    console.log("startAdventure called");
    document.querySelector('.welcome').style.display = 'none';
    const treasureHunt = document.getElementById('treasure-hunt');
    treasureHunt.style.display = 'block';

    // Desplazarse automáticamente hacia la sección de búsqueda del tesoro
    treasureHunt.scrollIntoView({ behavior: 'smooth' });
}

function revealMessage(id) {
    console.log("revealMessage called with id:", id);
    const message = document.getElementById(id);
    message.classList.toggle('hidden');

    // Desplazarse automáticamente hacia el mensaje revelado
    message.scrollIntoView({ behavior: 'smooth' });
}
// Reproducir el audio
    const audio = document.getElementById('birthday-song');
    audio.volume = 0; // Volumen inicial bajo
    audio.play().then(() => {
        // Aumentar el volumen gradualmente
        const fadeInAudio = setInterval(() => {
            if (audio.volume < 1.0) {
                audio.volume += 0.1; // Incrementar el volumen
            } else {
                clearInterval(fadeInAudio); // Detener el intervalo cuando el volumen es 1.0
            }
        }, 500); // Incremento cada 500ms
    }).catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}
