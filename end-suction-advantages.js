// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('End Suction Advantages page loaded');
    
    // Add smooth entrance animation
    const imageContainer = document.querySelector('.image-container');
    const advantagesBox = document.querySelector('.advantages-box');
    
    if (imageContainer) {
        imageContainer.style.opacity = '0';
        imageContainer.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            imageContainer.style.transition = 'opacity 0.6s, transform 0.6s';
            imageContainer.style.opacity = '1';
            imageContainer.style.transform = 'translateX(0)';
        }, 100);
    }
    
    if (advantagesBox) {
        advantagesBox.style.opacity = '0';
        advantagesBox.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            advantagesBox.style.transition = 'opacity 0.6s, transform 0.6s';
            advantagesBox.style.opacity = '1';
            advantagesBox.style.transform = 'translateX(0)';
        }, 200);
    }
});

