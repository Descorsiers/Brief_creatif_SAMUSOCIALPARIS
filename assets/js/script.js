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

document.addEventListener("DOMContentLoaded", () => {
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const nextBtn = document.querySelector(".next-btn");
    const backBtn = document.querySelector(".back-btn");

    // Passer à l'étape suivante
    nextBtn.addEventListener("click", () => {
        step1.classList.add("left-out"); // Glisse vers la gauche
        step1.classList.remove("active");

        // Ajouter la classe "entering" pour l'animation d'entrée
        step2.classList.add("entering");
        step2.classList.remove("hidden");

        // Attendre la fin de la transition pour activer le deuxième container
        setTimeout(() => {
            step2.classList.remove("entering");
            step2.classList.add("active");
        }, 50); // Activer l'animation après un petit délai
    });

    // Retour à l'étape précédente
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        step2.classList.remove("active");
        
        // Attendre la fin de l'animation avant de faire apparaître la première div
        setTimeout(() => {
            step2.classList.add("hidden");
            step1.classList.remove("hidden");
            setTimeout(() => {
                step1.classList.remove("left-out");
                step1.classList.add("active");
            }, 50); // Activer l'animation après un petit délai
        }, 500); // Durée de la transition définie en CSS
    });
});

