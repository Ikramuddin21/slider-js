const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
];

const imageTag = document.getElementById('slider-image');
let imageIndex = 0;
setInterval(() => {
    if(imageIndex >= images.length) {
        imageIndex = 0;
    }
//   imageTag.src = images[imageIndex];
imageTag.setAttribute('src', images[imageIndex]);
  imageIndex++;
}, 1500);