const newCommentHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id'));

    const id = event.target.getAttribute('data-id');

    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        const res = await fetch(`/api/post/${id}/comments`, {
            method: 'PUT',
            body: JSON.stringify({content}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment.');
        }
    }
};

document
    .querySelector('#commentbtn')
    .addEventListener('click', newCommentHandler);