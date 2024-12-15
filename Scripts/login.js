document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if (username === 'admin' && password === '12345') {
        onLoginSuccess(() => {
            console.log('User successfully logged in.');
            window.location.href = 'main.html'; 
        });
    } else {
        alert('Invalid credentials');
    }
});


function onLoginSuccess(callback) {
    callback();
}
