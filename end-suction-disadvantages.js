// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('End Suction Disadvantages page loaded');
    
    // Add smooth entrance animation
    const imageContainer = document.querySelector('.image-container');
    const disadvantagesBox = document.querySelector('.disadvantages-box');
    
    if (imageContainer) {
        imageContainer.style.opacity = '0';
        imageContainer.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            imageContainer.style.transition = 'opacity 0.6s, transform 0.6s';
            imageContainer.style.opacity = '1';
            imageContainer.style.transform = 'translateX(0)';
        }, 100);
    }
    
    if (disadvantagesBox) {
        disadvantagesBox.style.opacity = '0';
        disadvantagesBox.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            disadvantagesBox.style.transition = 'opacity 0.6s, transform 0.6s';
            disadvantagesBox.style.opacity = '1';
            disadvantagesBox.style.transform = 'translateX(0)';
        }, 200);
    }
});

