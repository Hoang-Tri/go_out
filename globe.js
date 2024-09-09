function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

function changeQuality(quality) {
    const img144p = document.getElementById('globe144p');
    const img240p = document.getElementById('globe240p');
    const img720p = document.getElementById('globe720p');
    const img1080p = document.getElementById('globe1080p');
    const heart = document.getElementById('heart');
    const youContainer = document.getElementById('youContainer');

    img144p.classList.remove('active');
    img240p.classList.remove('active');
    img720p.classList.remove('active');
    img1080p.classList.remove('active');
    heart.classList.remove('active');
    youContainer.innerHTML = ''; // Clear previous "You" divs

    if (quality === '1080p') {
        img1080p.classList.add('active');
        heart.classList.add('active');

        // Array of "You" divs
        const youCount = 50; // Number of "You" divs to display
        for (let i = 0; i < youCount; i++) {
            const youDiv = document.createElement('div');
            youDiv.textContent = 'You';
            youDiv.classList.add('you', 'active');

            // Set random position
            const { x, y } = getRandomPosition();
            youDiv.style.left = `${x}px`;
            youDiv.style.top = `${y}px`;

            youContainer.appendChild(youDiv);
        }
    } else {
        switch (quality) {
            case '144p':
                img144p.classList.add('active');
                break;
            case '240p':
                img240p.classList.add('active');
                break;
            case '720p':
                img720p.classList.add('active');
                break;
        }
    }
}

// Set default quality
changeQuality('144p');
