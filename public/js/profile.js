const newPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    if (name && content) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ name, content }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload;
        } else {
            alert('Failed to create post.');
        }
    }
};

const deletePostHandler = async (event) => {
    if (event.target.hasAttribute('data-id'));

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.reload;
    } else {
        alert('Failed to delete post');
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', deletePostHandler);