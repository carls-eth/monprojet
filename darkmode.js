// Récupère le bouton de mode sombre
const toggleButton = document.getElementById('dark-mode-toggle');

// Vérifie si le mode sombre est activé et applique la classe correspondante
function toggleDarkMode() {
    // Vérifie si le body a déjà la classe 'dark-mode'
    document.body.classList.toggle('dark-mode');

    // Change l'emoji du bouton en fonction du mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞'; // Mode clair (soleil)
    } else {
        toggleButton.textContent = '🌙'; // Mode sombre (lune)
    }
}

// Ajoute un écouteur d'événements au bouton
toggleButton.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

