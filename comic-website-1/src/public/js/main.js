document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const comicList = document.getElementById('comicList');

    // Handle comic upload
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(uploadForm);
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Comic uploaded successfully!');
                    // Optionally, refresh the comic list or redirect
                } else {
                    alert('Upload failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while uploading the comic.');
            });
        });
    }

    // Load comic thumbnails
    fetch('/comics')
    .then(response => response.json())
    .then(comics => {
        comics.forEach(comic => {
            const comicItem = document.createElement('div');
            comicItem.className = 'comic-item';
            comicItem.innerHTML = `<a href="/comic/${comic.id}"><img src="${comic.thumbnail}" alt="${comic.title}"><p>${comic.title}</p></a>`;
            comicList.appendChild(comicItem);
        });
    })
    .catch(error => {
        console.error('Error loading comics:', error);
    });
});