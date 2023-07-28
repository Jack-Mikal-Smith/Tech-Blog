const newCommentHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        const res = await fetch(`/api/post/${id}/comments`, {
            method: 'POST',
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
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);