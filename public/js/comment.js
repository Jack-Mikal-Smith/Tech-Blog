const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        const res = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/post')
        } else {
            alert('Failed to post comment.');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);