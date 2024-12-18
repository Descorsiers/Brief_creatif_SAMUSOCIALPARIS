document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("nav ul li");

    listItems.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page

            if (index === 2) {
                // Affiche une popup de confirmation
                const userConfirmed = window.confirm(
                    "Voulez-vous être redirigé vers un lien externe ?"
                );
                if (userConfirmed) {
                    // Redirige l'utilisateur vers le lien contenu dans le <a>
                    const link = item.querySelector("a").href;
                    window.location.href = link;
                }
                return; // Ne pas continuer pour le 3ᵉ élément
            }

            // Supprime la classe 'active' de tous les éléments
            listItems.forEach(li => li.classList.remove("active"));

            // Ajoute la classe 'active' à l'élément cliqué
            item.classList.add("active");
        });
    });
});
