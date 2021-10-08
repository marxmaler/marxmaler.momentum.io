const images = [
    "rain1.gif",
    "rain2.gif",
    "rain3.gif",
    "rain4.gif"
];

const chosenImage = images[Math.floor(Math.random()*images.length)]

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.append(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`