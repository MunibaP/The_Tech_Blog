const newTechPostFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title_new_tech_post').value.trim();
    const content = document.querySelector('#content_new_tech_post').value.trim();

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content_Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Fail to create new post');
        }
    }
};

// Function event listener for login form
const newTechPostForm = document.querySelector('.new_tech_post_form');
if(newTechPostForm) {
    newTechPostForm.addEventListener('submit', newTechPostFormHandler);
}