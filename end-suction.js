// Action button click interactions
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Handle button click
        switch(buttonText) {
            case 'ADVANTAGES':
                console.log('Opening Advantages section');
                alert('Advantages section coming soon!');
                // You can navigate to a new page or show a modal here
                // window.location.href = 'end-suction-advantages.html';
                break;
            case 'DISADVANTAGES':
                console.log('Opening Disadvantages section');
                alert('Disadvantages section coming soon!');
                // window.location.href = 'end-suction-disadvantages.html';
                break;
            case 'EXPLODED VIEW':
                console.log('Opening Exploded View');
                alert('Exploded View section coming soon!');
                // window.location.href = 'end-suction-exploded-view.html';
                break;
            case 'LIST COMPONENT':
                console.log('Opening List Component');
                alert('List Component section coming soon!');
                // window.location.href = 'end-suction-components.html';
                break;
        }
    });
});

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

