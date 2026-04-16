// In registration script
document.getElementById('regForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('newUsername').value;
    const pass = document.getElementById('newPassword').value;
    
    // Save to browser storage
    localStorage.setItem('savedUser', user);
    localStorage.setItem('savedPass', pass);
    alert("Account created successfully!");
    window.location.href = "index.html";
});

// In login script
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Retrieve from browser storage
    if (user === localStorage.getItem('savedUser') && pass === localStorage.getItem('savedPass')) {
        alert("Login successful!");
    } else {
        alert("Invalid credentials.");
    }
});