// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]:not([href*="wa.me"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito Scroll Reveal (revelar elementos ao rolar)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Mudança de estilo do Header ao rolar a página
window.addEventListener("scroll", function() {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = "#ffffff";
    }
});

// Executa o reveal uma vez ao carregar a página
reveal();