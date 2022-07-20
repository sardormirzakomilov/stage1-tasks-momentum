// ================= play pause ===================================
const playyyy = document.querySelector('.play')
const audio = document.querySelector('audio');
playyyy.addEventListener('click', playAudio)
function playAudio() {
    if (audio.paused) {
        audio.play()
        playyyy.classList.add('pause')
        console.log('if');
    } else {
        audio.pause();
        playyyy.classList.remove('pause')
        console.log('else');
    }
}
// =================================================================
const playList = [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:58'
    }, {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '03:50'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '05:05'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '05:03'
    }
]



// ======================== TIMER =================================

const time = document.querySelector('.time');
const date = document.querySelector('.date');

function timee() {
    time.innerHTML = new Date().toLocaleTimeString()
}
setInterval(timee, 1000)


function dataaa() {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    date.innerHTML = new Date().toLocaleDateString('en-En', options)
}
setInterval(dataaa, 1000)


// ======================== GOOD MORNING ===========================

const greeting = document.querySelector('.greeting');

function greetingF() {
    const greetingHours = new Date().getHours()

    if (greetingHours >= 5 && greetingHours < 12) {
        greeting.innerHTML = 'Good morning, '
    }
    else if (greetingHours >= 12 && greetingHours < 18) {
        greeting.innerHTML = 'Good afternoon, '
    }
    else if (greetingHours >= 18 && greetingHours < 21) {
        greeting.innerHTML = 'Good evening, '
    } else {
        greeting.innerHTML = 'Good night, '

    }
}
setInterval(greetingF, 1000)


// ======================== Local Input ==============================

const name = document.querySelector('.name');
name.addEventListener('input', function () {
    localStorage.setItem('name', name.value);
})
if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
}

// ========================        ===================================
