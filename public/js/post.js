const viewPostHandler = async (event) => {
    if (event.target.hasAttribute('data-id'));

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`api/posts/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        location.replace('/post');
    } else {
        alert('Failed to find post');
    }
};

document
    .querySelector('h3')
    .addEventListener('click', viewPostHandler);