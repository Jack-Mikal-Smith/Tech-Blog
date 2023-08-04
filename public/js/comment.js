const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        

        const id = document.querySelector('#post-id').innerText;

        const res = await fetch(`/api/comment/${id}`, {
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
    .querySelector('#commentbtn')
    .addEventListener('click', newCommentHandler);