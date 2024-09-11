const proceedButton = document.getElementById('proceedButton');
const warningSection = document.querySelector('.warning-section');
const contentSection = document.querySelector('.content-section');

proceedButton.addEventListener('click', function() {
    warningSection.style.display = 'none';
    contentSection.style.display = 'block';
});
