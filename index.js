const buttonBack = document.querySelector('#back');
const images = ['IIsusHristos.jpg', 'KazanskayaBogorodiza.jpg', 'SvNikolay.jpg', 'AlexandrNevskiy.png', 'Matronushka.jpg', 'SerafimSarovskiy.jpg', 'KseniyaPeterburgskaya.jpg', 'SvyatayaElena.jpg'];
const buttonNext = document.querySelector('#next');

i=0;

buttonNext.addEventListener('click', () => {
    i++;
    if (i>images.length-1) {
        i=0;
    }
    document.querySelector('.image').src=images[i];
    
})

buttonBack.addEventListener('click', () => {
    i--;
    if (i<0) {
        i=images.length-1;
    }
    document.querySelector('.image').src=images[i];
})

