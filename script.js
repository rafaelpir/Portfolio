document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        // Affiche le message de confirmation et masque le formulaire
        form.style.display = "none";
        confirmationMessage.style.display = "block";
    });
});

