document.addEventListener('DOMContentLoaded', function() {
    console.log('loggedIn:', localStorage.getItem('loggedIn'));
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'page-de-redirection.html'; // Remplacez par l'URL de la page souhaitée
    }
});

