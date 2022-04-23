const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpeg", "img2.jpeg", "img3.webp", "img4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log (randomIndex);
    image.src = "img/" + images[randomIndex];
}