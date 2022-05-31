async function loginFormHandler(event) {
    event.preventDefault();

    const name = document.querySelectory('#form-name').value.trim();
    const email = document.querySelector('#InputEmail').value.trim();
    const password = document.querySelector('#InputPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/teacher/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password 
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);

        if (response.ok) {
            document.location.replace(response.redirected);
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelectory('#form-name').value.trim();
    const email = document.querySelector('#InputEmail').value.trim();
    const password = document.querySelector('#InputPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/teacher/signup', {
            method: 'post',
            body: JSON.stringify({
                name,
                email,
                password 
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);

        if (response.ok) {
            document.location.replace(response.redirected);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);