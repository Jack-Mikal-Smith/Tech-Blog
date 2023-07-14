const post = async () => {
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
        document.location.reload;
    } else {
        alert(res.statusText);
    }
};

document.querySelector('#postbtn').addEventListener('submit', post);