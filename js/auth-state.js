// js/auth-state.js
document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged(function(user) {
        const loginButtons = document.querySelectorAll('.login-btn');
        
        if (user) {
            // User is logged in
            loginButtons.forEach(btn => {
                btn.innerHTML = '<i class="fas fa-user"></i> My Account';
                btn.href = 'dashboard.html';
                btn.classList.remove('active');
            });
        } else {
            // User is logged out
            loginButtons.forEach(btn => {
                btn.innerHTML = '<i class="fas fa-user"></i> Log In';
                btn.href = 'login.html';
                if (window.location.pathname.includes('login.html')) {
                    btn.classList.add('active');
                }
            });
        }
    });
});