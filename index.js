// Navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get page name from data attribute
        const page = this.getAttribute('data-page');
        
        // Update page title based on selection
        const pageTitle = document.querySelector('.page-title');
        switch(page) {
            case 'home':
                pageTitle.innerHTML = 'Welcome to <span>PumpMaster 360</span>';
                break;
            case 'profile':
                pageTitle.innerHTML = 'User <span>Profile</span>';
                break;
            case 'types':
                pageTitle.innerHTML = 'Types of <span>Pumps</span>';
                break;
            case 'simulations':
                pageTitle.innerHTML = 'Pump <span>Simulations</span>';
                break;
            case 'quiz':
                pageTitle.innerHTML = 'Knowledge <span>Quizzes</span>';
                break;
            case 'games':
                pageTitle.innerHTML = 'Learning <span>Games</span>';
                break;
        }
    });
});

// Card button interactions
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        const cardTitle = card.querySelector('.card-title').textContent;
        
        alert(`Starting: ${cardTitle}`);
        
        // Simulate earning points
        if (cardTitle !== "Play Games") {
            const pointsElement = document.querySelector('.points-value');
            let currentPoints = parseInt(pointsElement.textContent.replace(',', ''));
            currentPoints += 50;
            pointsElement.textContent = currentPoints.toLocaleString();
            
            // Show notification
            const notification = document.querySelector('.notification-icon');
            notification.style.transform = 'scale(1.2)';
            setTimeout(() => {
                notification.style.transform = 'scale(1)';
            }, 300);
            
            // Add to recent activity
            addRecentActivity(cardTitle);
        }
    });
});

// Notification icon click
document.querySelector('.notification-icon').addEventListener('click', function() {
    alert('You have 3 new notifications:\n- New simulation available\n- Quiz results ready\n- Weekly challenge starting soon');
});

// More icon click
document.querySelector('.more-icon').addEventListener('click', function() {
    alert('More options:\n- Settings\n- Help & Support\n- About PumpMaster 360\n- Logout');
});

// Function to add recent activity
function addRecentActivity(activityType) {
    const activityList = document.querySelector('.activity-list');
    const activities = [
        {
            icon: 'fa-play-circle',
            color: '#00b894',
            title: `Started "${activityType}"`,
            description: 'Just now • Earned 50 points'
        },
        {
            icon: 'fa-question',
            color: '#6c5ce7',
            title: 'New quiz available',
            description: '5 minutes ago'
        },
        {
            icon: 'fa-trophy',
            color: '#ff9a00',
            title: 'Level up!',
            description: '30 minutes ago'
        }
    ];
    
    // Clear current list
    activityList.innerHTML = '';
    
    // Add new activities
    activities.forEach(activity => {
        const activityItem = document.createElement('li');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <div class="activity-icon" style="background-color: ${activity.color};">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-details">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
            </div>
        `;
        
        activityList.appendChild(activityItem);
    });
}

// Initialize with some random progress values
document.addEventListener('DOMContentLoaded', function() {
    // Randomize progress bars slightly for visual interest
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const currentWidth = parseInt(bar.style.width);
        // Add slight random variation (+/- 5%)
        const variation = Math.random() * 10 - 5;
        const newWidth = Math.max(10, Math.min(100, (currentWidth || 0) + variation));
        bar.style.width = `${newWidth}%`;
        
        // Update the percentage label
        const label = bar.closest('.progress-item').querySelector('.progress-label span:last-child');
        label.textContent = `${Math.round(newWidth)}%`;
    });
});