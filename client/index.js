const header = document.getElementById('header');
const text_1 = document.getElementById('text_1');
const text_2 = document.getElementById('text_2');
const toggleBtn = document.getElementById('dark_lightModeBtn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    const calendarBtn = document.getElementById('calendarBtn');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.src = "Util/dark-mode-off.png";
        calendarBtn.src = "Util/calendar-dark.png"
    } else {
        toggleBtn.src = "Util/dark-mode-on.png"
        calendarBtn.src = "Util/calendar-light.png"
    }


})

const buttons = {
    fi: document.getElementById('fiBtn'),
    en: document.getElementById('enBtn'),
    ru: document.getElementById('ruBtn')
};

const translations = {
    fi: {
        header: `ArvoAjon autokoulussa on <br> käynnissä jatkuva kampanja!`,
        text_1: `Jos läpäiset teoria-ajokokeen ilman <br>yhtään virhettä, saat meiltä <span style="color:rgb(111, 0, 0);">200 €</span> <br>Jos teet yhden virheen, saat silti <span style="color:rgb(111, 0, 0);">100 €</span>`,
        text_2: `Ilmoittaudu, suorita koe mahdollisimman<br>vähän virheitä ja saat mukavan lahjan!`,
        urlBtn: `ILMOITTAUDU`
    },
    en: {
        header: `ArvoAjo Driving School <br> has an ongoing campaign!`,
        text_1: `If you pass the theory test with <br>no mistakes, you’ll receive <span style="color:rgb(111, 0, 0);">200 €</span> <br>One mistake still earns you <span style="color:rgb(111, 0, 0);">100 €</span>`,
        text_2: `Sign up, take the test with as few mistakes<br> as possible, and get a nice reward!`,
        urlBtn: `REGISTER`
    },
    ru: {
        header: `В автошколе ArvoAjo <br> проходит постоянная акция!`,
        text_1: `Если вы сдадите теоретический экзамен <br>без единой ошибки, вы получите <span style="color:rgb(111, 0, 0);">200 €</span> <br>За одну ошибку вы всё равно получите <span style="color:rgb(111, 0, 0);">100 €</span>`,
        text_2: `Запишитесь, сдайте экзамен с минимумом<br> ошибок и получите приятный подарок!`,
        urlBtn: `РЕГИСТРАЦИЯ`
    }
};


function changeLanguages(language) {
    header.innerHTML = translations[language].header;
    text_1.innerHTML = translations[language].text_1;
    text_2.innerHTML = translations[language].text_2;
    urlBtn.innerHTML = translations[language].urlBtn;
    
    for (key in buttons) {
        buttons[key].style.display = key === language ? "none" : "inline-block";
    }
}

buttons.fi.addEventListener('click', () => changeLanguages('fi'));
buttons.en.addEventListener('click', () => changeLanguages('en'));
buttons.ru.addEventListener('click', () => changeLanguages('ru'));

changeLanguages('fi');