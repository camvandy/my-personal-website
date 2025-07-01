// Main JavaScript file for futuristic effects and interactions

document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio loaded successfully!');

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add futuristic typing effect to hero title
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        let index = 0;

        function typeWriter() {
            if (index < originalText.length) {
                heroTitle.textContent = originalText.slice(0, index + 1) + '|';
                index++;
                setTimeout(typeWriter, 150);
            } else {
                heroTitle.textContent = originalText;
            }
        }

        // Start typing effect after a brief delay
        setTimeout(() => {
            heroTitle.textContent = '';
            typeWriter();
        }, 1000);
    }

    // Add floating animation to elements
    function addFloatingEffect() {
        const elements = document.querySelectorAll('.hero__subtitle, .hero__description');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('float-animation');
        });
    }

    // Initialize floating effect
    addFloatingEffect();

    // Add CSS animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .float-animation {
            animation: float 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
});
