// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Quiz page loaded');
    
    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Correct answers
    const correctAnswers = {
        q1: 'c', // Water supply and circulation
        q2: 'c', // Center (eye) of the impeller
        q3: 'c'  // Compact and simple design
    };
    
    // Handle form submission
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button to prevent double submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';
        
        // Get user answers
        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value || null,
            q2: document.querySelector('input[name="q2"]:checked')?.value || null,
            q3: document.querySelector('input[name="q3"]:checked')?.value || null
        };
        
        // Check if all questions are answered
        const allAnswered = Object.values(userAnswers).every(answer => answer !== null);
        
        if (!allAnswered) {
            alert('Please answer all questions before submitting.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT';
            return;
        }
        
        // Calculate score
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;
        const results = {};
        
        Object.keys(correctAnswers).forEach(question => {
            const isCorrect = userAnswers[question] === correctAnswers[question];
            results[question] = {
                userAnswer: userAnswers[question],
                correctAnswer: correctAnswers[question],
                isCorrect: isCorrect
            };
            if (isCorrect) {
                score++;
            }
        });
        
        // Store results in sessionStorage to pass to score review page
        sessionStorage.setItem('quizResults', JSON.stringify({
            score: score,
            totalQuestions: totalQuestions,
            results: results,
            userAnswers: userAnswers,
            correctAnswers: correctAnswers
        }));
        
        // Navigate to score review page
        setTimeout(() => {
            window.location.href = 'score-review.html';
        }, 500);
    });
    
    // Add smooth entrance animation
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Add animation for submit button
    setTimeout(() => {
        submitBtn.style.opacity = '0';
        submitBtn.style.transform = 'translateY(20px)';
        submitBtn.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            submitBtn.style.opacity = '1';
            submitBtn.style.transform = 'translateY(0)';
        }, 100);
    }, questionCards.length * 150);
});
