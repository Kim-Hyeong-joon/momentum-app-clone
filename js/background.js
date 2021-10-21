const images = ["0.JPG", "1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList.add("background-img");

document.body.appendChild(bgImage);
