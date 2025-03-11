// Função para rolagem suave
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links "Saiba Mais +"
    const saibaMaisLinks = document.querySelectorAll('a[href^="#"]');
    
    saibaMaisLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do elemento considerando o header fixo
                const headerOffset = 80; // altura do header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Função para animação ao rolar
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', animateOnScroll);
// Executa uma vez ao carregar a página
animateOnScroll();

// Adicionar classe active ao menu quando scrollar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('shadow-lg', window.scrollY > 0);
});

// Animação de fade-in para elementos quando aparecem na tela
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
}); 