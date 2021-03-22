const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');

form.addEventListener('click', e => {
    e.preventDefault();
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    
    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid';
    } else {
        // feedback not good
        feedback.textContent = 'username must containe letters only and must be between 6 and 12 characters long';
    }
});


// const signupForm = document.querySelector('.signup-form');

// signupForm.addEventListener("click", e => {
//     const username = document.querySelector('#username');
//     const password = document.querySelector('#password');
//     console.log(signupForm.username.value);
//     console.log(signupForm.password.value);
// });