function breaker() {
var lamp = document.querySelector('#lamp');
var breaker = document.querySelector('#breaker');
var sound = document.querySelector('.sound');

breaker.addEventListener('click', function () {
    if (lamp.getAttribute('src') === 'images/lampOff.png') {
        lamp.setAttribute('src', 'images/lampOn.png');
        breaker.setAttribute('src', 'images/circuit breakerOn.png');
        sound.innerHTML = "<audio src = 'sound/breakerSoundOn.mp3' autoplay = 'autoplay'></audio>"
    }
    else {
        lamp.setAttribute('src', 'images/lampOff.png');
        breaker.setAttribute('src', 'images/circuit breakerOff.png');
        sound.innerHTML = "<audio src = 'sound/breakerSoundOff.wav' autoplay = 'autoplay'></audio>" 
    }
})
}

breaker();
