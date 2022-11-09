const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {

        sonic.classList.remove('jump');

    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (pipePosition <= 90 && pipePosition > -1 && sonicPosition < 65) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = './img/gameover.png';
        
        sonic.style.width = '140px';


        clearInterval(loop);

    }
}, 10);


document.addEventListener('keydown', jump); 