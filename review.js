document.querySelectorAll('.smiley').forEach(smiley => {
    smiley.addEventListener('click', () => {
        document.getElementById('thankYouMessage').classList.remove('hidden');
        document.getElementById('feedbackSection').classList.remove('hidden'); // Show feedback section
    });
});

document.getElementById('submitFeedback').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        const confirmation = document.getElementById('feedbackConfirmation');
        confirmation.classList.remove('hidden');
        confirmation.style.opacity = 1; // Show the confirmation message
        
        // Fade out after a delay
        setTimeout(() => {
            confirmation.style.opacity = 0; // Fade out after 2 seconds
        }, 2000);
        
        // Clear the feedback text area and hide the feedback section
        document.getElementById('feedback').value = '';
        document.getElementById('feedbackSection').classList.add('hidden');
    } else {
        alert("Please enter your feedback before submitting.");
    }
});