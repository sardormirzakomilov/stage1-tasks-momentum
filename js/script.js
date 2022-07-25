
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

// ==============================   weather    ===================================
const city = document.querySelector('.city');
const temp = document.querySelector('.description-container .temperature');
const clSky = document.querySelector('.description-container .weather-description');
const humidity = document.querySelector(' .humidity');
const wind = document.querySelector('.wind');
const weatherIcon = document.querySelector('.owf');
let cityName = localStorage.getItem('city');

if (!cityName) {
    cityName = 'Minsk'
}

city.value = cityName;

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    fetch(url).then(res => res.json())
        .then(data => {
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temp.innerHTML = Math.floor(data.main.temp) + '&degC'
            clSky.innerHTML = data.weather[0].description
            wind.textContent = 'Wind speed: ' + Math.floor(data.wind.speed) + ' m/s'
            humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
        })
        .catch((error) => {
            console.log(error);
        })
}
getWeather()

let weather = (e) => {
    let cityVal = city.value
    if (e.keyCode === 13) {
        console.log(cityVal)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8a483a84d725f15e52c5e45c4f82edb8&units=metric`

        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                weatherIcon.classList.add(`owf-${data.weather[0].id}`);
                temp.innerHTML = Math.floor(data.main.temp) + '&degC'
                clSky.innerHTML = data.weather[0].description
                wind.textContent = 'Wind speed: ' + Math.floor(data.wind.speed) + ' m/s'
                humidity.textContent = 'Humidity: ' + data.main.humidity + '%'

                localStorage.setItem('city', cityVal)
            })
            .catch((error) => {
                console.log(error);
            })
    }

}
city.addEventListener('keypress', weather)

// =============================== Quote of the Day   ============================================

const ResButton = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let s = 0
function getQuotes() {
    const quotes = '../data.json';
    fetch(quotes)
    .then(res => res.json())
    .then(data => {
        if (s == data.length) {
            s = 0
        }
        quote.textContent = data[s].text;
        author.textContent = data[s].author;
        s++
        
    });
}
getQuotes();

ResButton.addEventListener('click', getQuotes)



// =============================== slider ============================================

const nextB = document.querySelector('.slide-next');
const prevB = document.querySelector('.slide-prev');
const body = document.querySelector('body');

nextB.addEventListener('click', nextF );
prevB.addEventListener('click', nextF );

function nextF() {
    let j = 0
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=nature&extras=url_l&format=json&nojsoncallback=1';
        arr = []
        fetch(url)
          .then(res => res.json())
          .then(data => {
            for (let key in data.photos.photo){
            arr.push(data.photos.photo[key].url_l)
            // console.log(data.photos.photo[key].url_l)
            
        
        }
        });
        console.log(arr);
        j++
        
}
function prevF() {
    
}