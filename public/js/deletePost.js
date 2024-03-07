const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.reload();
    } else {
        alert('Fail to delete the post');
    }
};

const deletePostHandler = (event) => {
    if(event.target.matches('.delete_post')) {
        const post_id = event.target.getAttributes('delete_post_id');
        deletePost(post_id);
    }
};

document.addEventListener('click', deletePostHandler);

