// protect.js

document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur est connecté
    if (!localStorage.getItem('loggedIn')) {
        // Rediriger vers une page spécifique si non connecté
        window.location.href = 'https://lmn-montage.github.io/'; // Remplacez par l'URL de la page de connexion
    }
});

