var imgBreaker = document.querySelector('#breaker');
var imgLamp = document.querySelector('#lamp');
var sound = document.querySelector('.sound');
var count = 0; //* Counter of events. If lamp On, takes value - 1 and if lamp Off, value - 2.

/**
 * Function "Lamp On/Off"
 */
imgBreaker.addEventListener('click', function () {
    var x = ++count;
    console.log(x);
    if (x % 2 === 0) {
        imgLamp.setAttribute('src', 'images/lampOff.png');
        imgBreaker.setAttribute('src', 'images/circuit breakerOff.png');
        sound.innerHTML = "<audio src = 'sound/breakerSoundOff.wav' autoplay = 'autoplay'></audio>" 
        count = 0;
    }
    else {
        imgLamp.setAttribute('src', 'images/lampOn.png');
        imgBreaker.setAttribute('src', 'images/circuit breakerOn.png');
        sound.innerHTML = "<audio src = 'sound/breakerSoundOn.mp3' autoplay = 'autoplay'></audio>"
    }
})
