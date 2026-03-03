const login_button = document.querySelector('.login-button');

login_button.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'Dashboard/home.html';
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});