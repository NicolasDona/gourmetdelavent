// ! Variables

// pour les animations :
const openCase = document.querySelector('.container__door');
const door = document.querySelector('img'); 
const imgToExtend = document.querySelector('.toExtend');
const fullsizeImg = document.querySelector('.fullsize');
// pour gérer la date : 
const date = new Date();
const dateDayNumber = date.getDate();
// mettre en place le localStorage :
const stockage = localStorage;
console.log(stockage);


// ! Evènements

openCase.addEventListener('click', () => {
    if (openCase.getAttribute('data-date') <= dateDayNumber) {
    openDoor();
    localStorage.setItem('dayOpened', openCase.getAttribute('data-date'));
    }
})

imgToExtend.addEventListener('click', zoomIn);

fullsizeImg.addEventListener('click', zoomOut);



// ! Fonctions

function openDoor() {
    door.classList.add('open');
}

function zoomIn() {
    fullsizeImg.classList.remove('d-none');
    fullsizeImg.classList.remove('zoomOut');
    fullsizeImg.classList.add('zoomIn');
}

function zoomOut() {
    fullsizeImg.classList.remove('zoomIn');
    fullsizeImg.classList.add('zoomOut');
    setTimeout(() => {
        fullsizeImg.classList.add('d-none');
    }, 1000);
}



