    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    // Fonction pour afficher la diapositive suivante
    function nextSlide() {
        images[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.transform = "translateX(0)";
    }

    // Fonction pour afficher la diapositive précédente
    function prevSlide() {
        images[currentIndex].style.transform = "translateX(100%)";
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.transform = "translateX(0)";
    }

    // Associez les fonctions aux boutons
    document.querySelector("button[data-action='prev']").addEventListener("click", prevSlide);
    document.querySelector("button[data-action='next']").addEventListener("click", nextSlide);
