// Play Games functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Play Games page loaded');
    
    const freePlayBtn = document.getElementById('freePlayBtn');
    const challengeBtn = document.getElementById('challengeBtn');
    
    // Free Play button click handler
    if (freePlayBtn) {
        freePlayBtn.addEventListener('click', function() {
            console.log('Free Play button clicked');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle free play action
            // You can add navigation or functionality here
            alert('Starting FREE PLAY mode...');
            
            // Example: Navigate to free play page
            // window.location.href = 'free-play.html';
        });
    }
    
    // Challenge button click handler
    if (challengeBtn) {
        challengeBtn.addEventListener('click', function() {
            console.log('Challenge button clicked');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle challenge action
            // You can add navigation or functionality here
            alert('Starting CHALLENGE mode...');
            
            // Example: Navigate to challenge page
            // window.location.href = 'challenge.html';
        });
    }
    
    // Add smooth entrance animation
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            button.style.transition = 'opacity 0.6s, transform 0.6s';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
