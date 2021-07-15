const Img = ['1.jpg', '2.jpg', '3.jpg'];

const chosenImg =  Img[Math.floor(Math.random() * Img.length)];

const bgImg = document.createElement('img');

bgImg.src = `/img/${chosenImg}`


const h2 = document.querySelector("#clock")

document.body.appendChild(bgImg)