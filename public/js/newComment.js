const newTechCommentFormHandler = async(event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content_new_tech_comment').value.trim();

    if(content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({comment_text: content, post_id}),
            headers: {'Content_Type': 'application/json'},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Fail to create new comment');
        }
    }
};

// Function to add event listeners
const newTechCommentForm = document.querySelector('.new_tech_comment_form');
if(newTechCommentForm) {
    newTechCommentForm.addEventListener('submit', newTechCommentFormHandler);
}