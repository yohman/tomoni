// JavaScript for image carousel
const bannerImg = document.getElementById('bannerImg');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Function to display image based on index
function showImage(index) {
bannerImg.src = images[index];
}

// Function to generate thumbnail images
function generateThumbnails() {
thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails
images.forEach((image, index) => {
	const thumbnail = document.createElement('img');
	thumbnail.src = image;
	thumbnail.alt = `Thumbnail ${index + 1}`;
	thumbnail.className = 'thumbnail';
	thumbnail.addEventListener('click', () => {
	currentIndex = index;
	showImage(currentIndex);
	});
	thumbnailsContainer.appendChild(thumbnail);
});
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
});

// Generate thumbnails and show the first image initially
generateThumbnails();
showImage(currentIndex);