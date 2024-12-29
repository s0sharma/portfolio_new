// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing effect function
    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1), 50);
        }
    }

    // Initialize typing effects with sequential delay
    const commands = document.querySelectorAll('.typing-effect');
    let delay = 0;

    commands.forEach((element) => {
        const text = element.textContent;
        element.textContent = '';
        
        setTimeout(() => {
            typeWriter(element, text);
        }, delay);
        
        delay += 1500; // Delay between commands
    });

    // Glass effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.glass-effect');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    

});