async function loginFormHandler(event) {
    event.preventDefault();

    const name = document.querySelectory('#form-name').value.trim();
    const email = document.querySelector('#InputEmail').value.trim();
    const password = document.querySelector('InputPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/login-teacher', {
            method: 'post',
            body: JSON.stringify({
                name,
                email,
                password 
            }),
            headers: { 'Content-type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);