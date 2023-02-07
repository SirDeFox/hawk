const hoursEl = document.querySelector('#hours'),
    minuteEl = document.querySelector('#minutes'),
    secondEl = document.querySelector('#seconds');

function updateClock() {
    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    hoursEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;

    setInterval(() => updateClock(), 1000);
}
updateClock();

const hoursEl1 = document.querySelector('#hours1'),
    minuteEl1 = document.querySelector('#minutes1'),
    secondEl1 = document.querySelector('#seconds1');

function updateClock1() {
    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();

    h = 23 - h;
    m = 59 - m;
    s = 60 - s;

    hoursEl1.innerHTML = h < 10 ? `0${h}` : h;
    minuteEl1.innerHTML = m < 10 ? `0${m}` : m;
    secondEl1.innerHTML = s < 10 ? `0${s}` : s;

    setInterval(() => updateClock1(), 1000);
}
updateClock1();

const
    modal = document.querySelector('.modal'),
    modalOpen = document.querySelector('.block__btn'),
    modalClose = document.querySelector('.modal-close')

modalOpen.addEventListener('click', () => modal.classList.add('active'))
modalClose.addEventListener('click', () => modal.classList.remove('active'))
window.onclick = e => {
    if (e.target === modal) modal.classList.remove('active')
}