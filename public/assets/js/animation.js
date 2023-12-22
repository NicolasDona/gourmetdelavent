// ! Variables

// pour les animations :
const openCase = document.querySelectorAll('.container__door');
const door = document.querySelectorAll('img'); 
const imgToExtend = document.querySelectorAll('.toExtend');
const fullsizeImg = document.querySelector('.fullsize');
// pour gérer la date : 
const date = new Date();
const dateDayNumber = date.getDate();
// mettre en place le localStorage :
const stockage = localStorage;
console.log(stockage);


// ! Evènements
openCase.forEach(opCase => {
    opCase.addEventListener('click', () => {
        if (opCase.getAttribute('data-date') <= dateDayNumber) {
            openDoor(opCase);
            localStorage.setItem('dayOpened', opCase.getAttribute('data-date')); // mémoriser la case ouverte au click
            }
})
});

fullsizeImg.addEventListener('click', zoomOut);

// ! Fonctions
function openDoor(opCase) {
    const mydoor = opCase.querySelector('.toOpen');
    const myImg = opCase.querySelector('.toExtend');
    mydoor.classList.add('open');
    myImg.addEventListener('click', (e)=>zoomIn(e))
}

function zoomIn(event) {
    console.log(event.target);
    console.log(fullsizeImg);
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