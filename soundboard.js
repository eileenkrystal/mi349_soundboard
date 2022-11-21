var buttonElement = document.getElementById('Chime-up')
var buttonElement = document.getElementById('Bubbles')
var buttonElement = document.getElementById('Doorbell')
const chime = new Audio("https://www.wavsource.com/snds_2020-10-01_3728627494378403/sfx/chime_up.wav");
const bubbles = new Audio("https://www.wavsource.com/snds_2020-10-01_3728627494378403/sfx/bubbling1.wav")
const doorbell = new Audio("https://www.wavsource.com/snds_2020-10-01_3728627494378403/sfx/doorbell_x.wav")

buttonElement.addEventListener('click', function () {
    chime.play();
    console.log('I was clicked')
})

buttonElement.addEventListener('click', function () {
    bubbles.play();
    console.log('I was clicked')
})

buttonElement.addEventListener('click', function () {
    doorbell.play();
    console.log('I was clicked')
})