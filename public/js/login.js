const loginForm = document.querySelector('.login-form');
const singupForm = document.querySelector('.signup-form');

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}

loginForm.addEventListener('submit', loginFormHandler);
singupForm.addEventListener('submit', signupFormHandler);