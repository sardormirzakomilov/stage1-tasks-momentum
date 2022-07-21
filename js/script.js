// =================================================================

function allMusic() {
    
    const allMusic = [
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
return allMusic
}


// ================= play pause ===================================
const playList = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');

// Music names
allMusic().forEach(val => {
    const play_item = document.createElement('li');

    play_item.classList.add("play-item")

    const nameText = document.createTextNode(`${val.title}`)

    play_item.appendChild(nameText)

    playList.appendChild(play_item)
})

//  paused
let i = 0

let audio = new Audio();

audio.src = allMusic()[i].src

const play = document.querySelector('.play');

play.addEventListener("click", playPauseHandler)

function playPauseHandler() {
    play.classList.toggle("pause")

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// next prev buttons
const play_item = document.querySelectorAll('.play-item');

playNext.addEventListener("click", nextHandler)
playPrev.addEventListener("click", prevHandler)

function nextHandler() {
    play.classList.add("pause")

    audio.src = allMusic()[i].src

    audio.play()

    play_item.forEach((val) => val.classList.remove("item-active"))

    play_item[i].classList.add("item-active")

    i++

    if (i >= play_item.length) {
        i = 0
    }
}

function prevHandler() {
    play.classList.add("pause")

    play_item.forEach((val) => val.classList.remove("item-active"))

    i--
    if (i < 0) {
        i = play_item.length - 1
    }
    play_item[i].classList.add("item-active")
    audio.src = allMusic()[i].src

    audio.play()
}


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

// ==============================  slider    ===================================


const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

slidePrev.addEventListener('click' ,  prevvSlide)

function prevvSlide() {
    body.style.backgroundImage = `url('../assets/img/bg2.jpg')`
}
