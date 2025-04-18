

// Your Firebase config (same as in firebase-config.js)
const firebaseConfig = {
    apiKey: "AIzaSyBlueL5pXIARVMbSVlKzglBda_65ap6W8k",
    authDomain: "rizal-eats.firebaseapp.com",
    projectId: "rizal-eats",
    storageBucket: "rizal-eats.firebasestorage.app",
    messagingSenderId: "408631282807",
    appId: "1:408631282807:web:ccb009c71fc1796abdca72",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function handleLogin(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      throw error;
    });
}

// Login Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('errorMessage');
      
      errorMessage.style.display = 'none';
      
      handleLogin(email, password)
        .then(() => {
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          errorMessage.textContent = error.message;
          errorMessage.style.display = 'block';
        });
    });
  }

  // Check auth state for all pages
  auth.onAuthStateChanged(function(user) {
    const loginButtons = document.querySelectorAll('.login-btn');
    
    if (user) {
      // User is logged in
      loginButtons.forEach(btn => {
        btn.innerHTML = '<i class="fas fa-user"></i> My Account';
        btn.href = 'dashboard.html';
      });
    } else {
      // User is logged out
      loginButtons.forEach(btn => {
        btn.innerHTML = '<i class="fas fa-user"></i> Log In';
        btn.href = 'login.html';
      });
    }
  });
});