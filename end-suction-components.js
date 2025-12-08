// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('End Suction Components page loaded');
    
    // Add smooth entrance animation for component cards
    const cards = document.querySelectorAll('.component-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

