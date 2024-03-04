const techLoginFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username_tech_login').value.trim();
    const password = document.querySelector('#password_tech_login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content_Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Fail to login');
        }
    }
};

// Function event listener for login form
const techLoginForm = document.querySelector('.tech_login_form');
if(techLoginForm) {
    techLoginForm.addEventListener('submit', techLoginFormHandler);
}