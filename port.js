// port.js
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".animated-image");
  let imageIndex = 0;

  function showImage() {
    images[imageIndex].classList.add("show");
    imageIndex = (imageIndex + 1) % images.length; // Move to the next image
  }

  // Initial delay before showing the first image
  setTimeout(showImage, 1000);

  // Show the next image after a delay
  setInterval(showImage, 2000); // Change the delay as needed (3 seconds in this example)
});
