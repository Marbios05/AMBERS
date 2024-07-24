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
