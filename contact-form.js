document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Récupérez les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Utilisez Fetch API pour envoyer les données au serveur
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Le message a été envoyé avec succès, vous pouvez afficher un message de confirmation ici
            alert('Message envoyé avec succès');
        } else {
            // Il y a eu une erreur lors de l'envoi, vous pouvez gérer l'erreur ici
            alert('Erreur lors de l\'envoi du message');
        }
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite');
    });
});