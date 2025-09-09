const footer = document.getElementById("footer");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });
}, { threshold: 1.0 }); // 100% sichtbar

observer.observe(footer);