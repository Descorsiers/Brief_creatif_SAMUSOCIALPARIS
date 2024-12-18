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
setTimeout(() => {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';

    setTimeout(() => {
        const preloader = document.querySelector('.preloader');

        // Remplacer 'homepage' par la div contenant la page d'accueil
        const homepage = document.querySelector('.homepage');

        preloader.style.transform = 'translateX(-100%)';
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
            homepage.classList.add('active'); // même chose ici
        }, 1000);
    }, 5000);
}, 3000);

