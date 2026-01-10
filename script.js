document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Active link highlight
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Back to top button
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑ Top";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dynamic year
    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.textContent = `© ${new Date().getFullYear()} Amos Odelade`;
    }

});
