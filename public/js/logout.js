const techLogout = async() => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content_Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert('Fail to logout');
    }
};

// Function event listener for logout button
const techLogoutButton = document.querySelector('#tech_logout');
if(techLogoutButton) {
    techLogoutButton.addEventListener('click', techLogout);
}