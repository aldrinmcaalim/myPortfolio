// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// //const username = document.querySelector('#username');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('click', e => {
//     e.preventDefault();
//     const username = form.username.value;
    
//     if (usernamePattern.test(username)) {
//         // feedback good info
//         feedback.textContent = 'that username is valid';
//     } else {
//         // feedback not good
//         feedback.textContent = 'username must containe letters only and must be between 6 and 12 characters long';
//     }
// });

// // live feedback

// form.username.addEventListener('keyup', e => {
//     // console.log(e.target.value, form.username.value);
//     if (usernamePattern.test(e.target.value)) {
//         form.username.setAttribute('class', 'success');
//     } else {
//         form.username.setAttribute('class', 'error');
//     }
// });

const form = document.querySelector('.signup-form');
const validPattern = /^[a-zA-Z]{6,12}$/;
const message = document.querySelector('.message');

form.username.addEventListener('keyup', e => {
    if (validPattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});
// form.addEventListener('click', e => {
//     const username = form.username.value;
//     if (validPattern.test(username)) {
//         console.log('valid');
//         message.textContent = 'valid';
//     } else {
//         console.log('invalid');
//         message.textContent = 'invalid';
//     }
// });

