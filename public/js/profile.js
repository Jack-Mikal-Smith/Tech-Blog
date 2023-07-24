const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');

            console.log(title, content, id);

        } else {
            alert('Failed to create post.');
        }
    }
};

const deletePostHandler = async (event) => {
    if (event.target.hasAttribute('data-id'));

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};

const viewPostHandler = async (event) => {
    if (event.target.hasAttribute('data-id'));

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`api/posts/${id}`, {
        method: 'GET',
        body: { title, content },
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/post');
    } else {
        alert('Failed to find post');
    }
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('#delete-btn')
    .addEventListener('click', deletePostHandler);
    
document
    .querySelector('h3')
    .addEventListener('click', viewPostHandler);