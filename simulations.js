// Simulation button interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simulations page loaded');
    
    const assembleBtn = document.getElementById('assembleBtn');
    const disassembleBtn = document.getElementById('disassembleBtn');
    
    // Assemble button click handler
    if (assembleBtn) {
        assembleBtn.addEventListener('click', function() {
            console.log('Assemble button clicked');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle assemble action
            // You can add navigation or functionality here
            alert('Starting ASSEMBLE simulation...');
            
            // Example: Navigate to assemble page
            // window.location.href = 'assemble.html';
        });
    }
    
    // Disassemble button click handler
    if (disassembleBtn) {
        disassembleBtn.addEventListener('click', function() {
            console.log('Disassemble button clicked');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle disassemble action
            // You can add navigation or functionality here
            alert('Starting DISASSEMBLE simulation...');
            
            // Example: Navigate to disassemble page
            // window.location.href = 'disassemble.html';
        });
    }
    
    // Add smooth entrance animation
    const buttons = document.querySelectorAll('.simulation-btn');
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
