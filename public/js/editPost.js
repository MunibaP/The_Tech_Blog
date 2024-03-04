const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// Function to update post
const updateTechPostFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title_update_tech_post').value.trim();
    const content = document.querySelector('#content_update_tech_post').value.trim();

    if(title & content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: {'Content_Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Fail to update the post');
        }
    }
};

// Function to delete a post
const deleteTechPostFormHandler = async(event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Fail to update the post');
    }
};

// Function to add event listeners
const updateTechPostButton = document.querySelector('#update_tech_post');

if(updateTechPostButton) {
    updateTechPostButton.addEventListener('click', updateTechPostFormHandler);
}

const deleteTechPostButton = document.querySelector('#delete_tech_post');

if(deleteTechPostButton) {
    deleteTechPostButton.addEventListener('click', deleteTechPostFormHandler);
}