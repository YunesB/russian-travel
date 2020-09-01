let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.header__button');
let popupClose = document.querySelector('.popup__close');

let pic = document.querySelector('.popup__box');
let picOpen = document.querySelector('.popup__info-button');
let picClose = document.querySelector('.popup__info-pic-close');

function popupToggle() {
    popup.classList.toggle('popup_opened');
};

function picToggle() {
    pic.classList.toggle('popup__box_opened');
    picOpen.classList.toggle('popup__info-button_opened')
};

popup.onclick = function(e) {
    if (e.target == popup) {
        popupToggle();
    };
};

popupOpen.addEventListener('click', popupToggle);
popupClose.addEventListener('click', popupToggle);

picOpen.addEventListener('click', picToggle);
picClose.addEventListener('click', picToggle);