document.addEventListener("DOMContentLoaded", () => {
    const changePageBtn = document.getElementById("credit");
    const body = document.body;

    // Créer un élément de transition pour l'animation de changement de page
    const pageTransition = document.createElement("div");
    pageTransition.classList.add("page-transition");
    body.appendChild(pageTransition);

    // Ajouter l'animation de transition au clic du bouton
    changePageBtn.addEventListener("click", () => {
        pageTransition.classList.add("active"); // Déclencher l'animation

        // Attendre que l'animation se termine (1 seconde ici)
        setTimeout(() => {
            // Rediriger l'utilisateur après la fin de l'animation
            window.location.href = "credit.html"; // Redirection vers la page "credit.html"
        }, 1000); // 1000ms correspond à la durée de l'animation
    });
});