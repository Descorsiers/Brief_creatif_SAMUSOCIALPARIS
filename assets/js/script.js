document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("nav ul li");

    listItems.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            if (index === 2) {
                const userConfirmed = window.confirm(
                    "Vous allez être redirigé vers un lien externe. Voulez-vous continuer ?"
                );
                if (userConfirmed) {
                    const link = item.querySelector("a").href;
                    window.location.href = link;
                }
                return;
            }

            listItems.forEach(li => li.classList.remove("active"));

            item.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const nextBtn = document.querySelector(".next-btn");
    const backBtn = document.querySelector(".back-btn");

    nextBtn.addEventListener("click", () => {
        step1.classList.add("left-out");
        step1.classList.remove("active");

        step2.classList.add("entering");
        step2.classList.remove("hidden");

        setTimeout(() => {
            step2.classList.remove("entering");
            step2.classList.add("active");
        }, 50);
    });

    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        step2.classList.remove("active");
        
        setTimeout(() => {
            step2.classList.add("hidden");
            step1.classList.remove("hidden");
            setTimeout(() => {
                step1.classList.remove("left-out");
                step1.classList.add("active");
            }, 50); 
        }, 500);
    });
});

setTimeout(() => {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';

    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const homepage = document.querySelector('.homepage');
        const footer = document.querySelector('#footer');

        preloader.style.transform = 'translateX(-100%)';
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
            homepage.classList.add('active');
            footer.classList.remove('hidden');
            footer.classList.add('visible');
            footer.classList.add('active');
        }, 1000);
    }, 5000);
}, 3000);


