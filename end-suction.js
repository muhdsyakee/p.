// Action button click interactions - removed popup alerts since buttons are now links

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('End Suction page loaded');
    
    // Add smooth entrance animation
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'opacity 0.5s, transform 0.5s';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

