const form = document.getElementById('form');
const pseudoInput = document.getElementById('pseudo');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordCheckInput = document.getElementById('password-check');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    let messages = [];

    // Vérification du pseudo
    if (pseudoInput.value.length < 6) {
        pseudoInput.classList.add('invalid');
        isValid = false;
        messages.push("Le pseudo doit comporter au moins 6 caractères.");
    } else {
        pseudoInput.classList.remove('invalid');
        pseudoInput.classList.add('valid');
    }

    // Vérification de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        isValid = false;
        messages.push("L'email n'est pas valide.");
    } else {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    }

    // Vérification du mot de passe
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add('invalid');
        isValid = false;
        messages.push("Le mot de passe doit comporter au moins 8 caractères.");
    } else {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
    }

    // Vérification de la correspondance des mots de passe
    if (passwordInput.value !== passwordCheckInput.value) {
        passwordCheckInput.classList.add('invalid');
        isValid = false;
        messages.push("Les mots de passe ne correspondent pas.");
    } else {
        passwordCheckInput.classList.remove('invalid');
        passwordCheckInput.classList.add('valid');
    }

    // Vérification du sexe
    const sexeOptions = document.querySelectorAll('input[name="sexe"]');
    let isSexeSelected = Array.from(sexeOptions).some(option => option.checked);
    
    if (!isSexeSelected) {
        isValid = false;
        messages.push("Veuillez sélectionner votre sexe.");
    }

    // Affichage des messages de validation
    if (isValid) {
        messageDiv.innerHTML = "<p class='success-message'>Formulaire soumis avec succès !</p>";
    } else {
        messageDiv.innerHTML = "<p class='error-message'>" + messages.join('<br>') + "</p>";
    }
});

const toggleButton = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('icon');

// Appliquer le mode sombre si déjà activé
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.textContent = '☀️';
}

// Basculement clair/sombre
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';  // Icône soleil
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        icon.textContent = '🌙';  // Icône lune
        localStorage.setItem('dark-mode', 'disabled');
    }
});

