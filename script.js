// Store user preferences in localStorage
function storeUserPreference(pref) {
    localStorage.setItem('animationPreference', pref);
}

// Retrieve user preferences from localStorage
function getUserPreference() {
    return localStorage.getItem('animationPreference');
}

// Trigger the animation on the image
function triggerAnimation() {
    const image = document.getElementById('animatedImage');
    image.classList.add('animate');

    // After animation completes, remove class to reset for next animation
    setTimeout(() => {
        image.classList.remove('animate');
    }, 1000);  // Timeout matches the CSS animation duration
}

// Event listener for button click
document.getElementById('animateButton').addEventListener('click', () => {
    // Get current preference and toggle the animation
    const currentPref = getUserPreference();

    if (currentPref === 'enabled') {
        triggerAnimation();
        storeUserPreference('disabled');
    } else {
        storeUserPreference('enabled');
    }
});
