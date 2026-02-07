function checkLogin() {
    const password = document.getElementById('passwordField').value.toLowerCase();
    const errorMsg = document.getElementById('error-msg');
    
    if (password === '10/9/25') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('question-screen').classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
}

function runAway() {
    const noBtn = document.getElementById('noBtn');
    
    // Limits movement to the visible screen area
    const padding = 50;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);
    
    noBtn.style.position = 'fixed'; // Switching to fixed for easier mobile math
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function showGallery() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('gallery-screen').classList.remove('hidden');
}