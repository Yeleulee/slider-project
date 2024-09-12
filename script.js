const slide = document.querySelector('.slide');
const items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let counter = 0;

function updateSlide() {
    // Remove active class from all items
    items.forEach(item => {
        item.classList.remove('active');
        const video = item.querySelector('video');
        if (video) {
            video.pause(); // Pause all videos
        }
    });

    // Add active class to the current item
    items[counter].classList.add('active');
    const activeVideo = items[counter].querySelector('video');
    if (activeVideo) {
        activeVideo.play(); // Play the active video
    }

    // Slide to the current item
    slide.style.transform = `translateX(-${counter * 100}%)`;
}

next.addEventListener('click', () => {
    counter++;
    if (counter >= items.length) {
        counter = 0;
    }
    updateSlide();
});

prev.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = items.length - 1;
    }
    updateSlide();
});

// Initial setup: Add active class to the first item and play the first video
updateSlide();
