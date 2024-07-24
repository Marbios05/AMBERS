function startAdventure() {
    console.log("startAdventure called"); // Para depuración
    document.querySelector('.welcome').style.display = 'none';
    document.getElementById('treasure-hunt').style.display = 'block';

    const audio = document.getElementById('birthday-song');

    // Reproducir el audio con volumen inicial bajo
    audio.play().then(() => {
        audio.volume = 0; // Volumen inicial bajo
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
