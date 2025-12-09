// Score Review functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Score review page loaded');
    
    // Get quiz results from sessionStorage
    const quizResultsData = sessionStorage.getItem('quizResults');
    
    if (!quizResultsData) {
        // If no results found, redirect to quiz page
        alert('No quiz results found. Redirecting to quiz page.');
        window.location.href = 'quiz.html';
        return;
    }
    
    const quizResults = JSON.parse(quizResultsData);
    const { score, totalQuestions, results, userAnswers, correctAnswers } = quizResults;
    
    // Update score display
    const scoreMarks = document.getElementById('scoreMarks');
    const scoreRating = document.getElementById('scoreRating');
    const scoreBox = document.getElementById('scoreBox');
    
    scoreMarks.textContent = `${score}/${totalQuestions} MARKS`;
    
    // Determine rating based on score percentage
    const percentage = (score / totalQuestions) * 100;
    let rating = '';
    let ratingColor = '';
    
    if (percentage >= 90) {
        rating = 'EXCELLENT';
        ratingColor = '#ff7675';
    } else if (percentage >= 70) {
        rating = 'GOOD';
        ratingColor = '#fdcb6e';
    } else if (percentage >= 50) {
        rating = 'FAIR';
        ratingColor = '#74b9ff';
    } else {
        rating = 'NEEDS IMPROVEMENT';
        ratingColor = '#636e72';
    }
    
    scoreRating.textContent = rating;
    scoreBox.style.background = `linear-gradient(135deg, ${ratingColor} 0%, ${adjustBrightness(ratingColor, -20)} 100%)`;
    
    // Update feedback text based on score
    const goodText = document.getElementById('goodText');
    if (percentage >= 90) {
        goodText.textContent = 'GOOD!';
        goodText.style.color = '#e74c3c';
    } else if (percentage >= 70) {
        goodText.textContent = 'WELL DONE!';
        goodText.style.color = '#f39c12';
    } else if (percentage >= 50) {
        goodText.textContent = 'KEEP TRYING!';
        goodText.style.color = '#3498db';
    } else {
        goodText.textContent = 'TRY AGAIN!';
        goodText.style.color = '#95a5a6';
    }
    
    // Show/hide stars based on score
    const starsContainer = document.getElementById('starsContainer');
    const stars = starsContainer.querySelectorAll('.star');
    const starsToShow = Math.round((score / totalQuestions) * 5);
    
    stars.forEach((star, index) => {
        if (index < starsToShow) {
            star.style.display = 'block';
        } else {
            star.style.display = 'none';
        }
    });
    
    // Display detailed results
    displayDetailedResults(results, userAnswers, correctAnswers);
    
    // Helper function to adjust color brightness
    function adjustBrightness(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, Math.max(0, (num >> 16) + amt));
        const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
        const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }
    
    // Display detailed results
    function displayDetailedResults(results, userAnswers, correctAnswers) {
        const resultsList = document.getElementById('resultsList');
        const questionTexts = {
            q1: 'What is the most common application of an end suction centrifugal pump?',
            q2: 'In an end suction pump, the suction pipe is connected to the:',
            q3: 'Which of the following is a typical advantage of an end suction centrifugal pump?'
        };
        
        const optionTexts = {
            q1: {
                a: 'Pumping sludge',
                b: 'Fuel injection',
                c: 'Water supply and circulation',
                d: 'Hydraulic press operation'
            },
            q2: {
                a: 'Top of the casing',
                b: 'Side of the impeller',
                c: 'Center (eye) of the impeller',
                d: 'Discharge outlet'
            },
            q3: {
                a: 'Complex installation',
                b: 'High maintenance cost',
                c: 'Compact and simple design',
                d: 'Only works at low flow rates'
            }
        };
        
        Object.keys(results).forEach((questionKey, index) => {
            const result = results[questionKey];
            const questionNum = index + 1;
            const isCorrect = result.isCorrect;
            
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            const userAnswerText = optionTexts[questionKey][result.userAnswer];
            const correctAnswerText = optionTexts[questionKey][result.correctAnswer];
            
            resultItem.innerHTML = `
                <div class="result-item-header">
                    <div class="result-question">Question ${questionNum}: ${questionTexts[questionKey]}</div>
                    <div class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? 'CORRECT' : 'INCORRECT'}
                    </div>
                </div>
                <div class="result-answer">
                    <strong>Your answer:</strong> ${userAnswerText}
                    ${!isCorrect ? `<br><strong>Correct answer:</strong> ${correctAnswerText}` : ''}
                </div>
            `;
            
            resultsList.appendChild(resultItem);
        });
    }
    
    // Clear sessionStorage after displaying results (optional)
    // sessionStorage.removeItem('quizResults');
});
