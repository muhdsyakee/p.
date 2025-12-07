// Pump card click interactions
document.querySelectorAll('.pump-card').forEach(card => {
    card.addEventListener('click', function() {
        const pumpType = this.querySelector('.card-banner span').textContent;
        
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Handle card click - could navigate to detail page
        console.log(`Selected: ${pumpType}`);
        
        // You can add navigation or modal display here
        // For example: window.location.href = `pump-detail.html?type=${pumpType.toLowerCase().replace(' ', '-')}`;
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Centrifugal Pump Types page loaded');
    
    // Add smooth entrance animation
    const cards = document.querySelectorAll('.pump-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

