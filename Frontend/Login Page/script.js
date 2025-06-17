document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonText(savedTheme);
    } else {
        updateButtonText(''); // Set the default button text
    }

    // Add event listener for the theme toggle button
    themeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', ''); // Clear preference
            updateButtonText('');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme'); // Save preference
            updateButtonText('dark-theme');
        }
    });

    // Function to update the button text based on the current theme
    function updateButtonText(currentTheme) {
        if (currentTheme === 'dark-theme') {
            themeButton.textContent = 'Switch to Light Mode';
        } else {
            themeButton.textContent = 'Switch to Dark Mode';
        }
    }
});
const button = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.classList.add('bounce');
    setTimeout(() => btn.classList.remove('bounce'), 300);
});
