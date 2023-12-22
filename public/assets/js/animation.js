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
console.log(door);
console.log(dateDayNumber);

// ! Evènements

openCase.addEventListener('click', (event) => {
    const clickedCase = event.currentTarget;

    if (clickedCase.getAttribute('data-date') <= dateDayNumber) {
        openDoor(clickedCase);
        localStorage.setItem('dayOpened', clickedCase.getAttribute('data-date'));
    }
});


imgToExtend.addEventListener('click', (event) => {
    const clickedCase = event.currentTarget.parentElement;
    zoomIn(clickedCase);
});


fullsizeImg.addEventListener('click', zoomOut);



// ! Fonctions

function openDoor(clickedCase) {
    const door = clickedCase.querySelector('img');
    door.classList.add('open');
}


function zoomOut() {
    fullsizeImg.classList.remove('zoomIn');
    fullsizeImg.classList.add('zoomOut');
    setTimeout(() => {
        fullsizeImg.classList.add('d-none');
    }, 1000);
}

function zoomIn(clickedCase) {
    const dayNumber = clickedCase.getAttribute('data-date');

    fetch('./public/assets/json/base.json')
        .then(response => response.json())
        .then(data => {
            const selectedItem = data.find(item => item.id == dayNumber);

            updateCard(selectedItem);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
}


function updateCard(data) {

    const fullsizeDiv = document.querySelector('.fullsize');
    const cardImg = fullsizeDiv.querySelector('.card-img-top');
    const cardTitle = fullsizeDiv.querySelector('.card-title');
    const cardText = fullsizeDiv.querySelector('.card-text');
    const btnPrimary = fullsizeDiv.querySelector('.btn-primary');

    cardImg.src = `./public/assets/img/img_big/${data.img}.jpg`;
    cardTitle.textContent = data.title;
    cardText.textContent = data.description;

    btnPrimary.addEventListener('click', () => {
        window.open(data.recipe, '_blank');
    });
    

    fullsizeDiv.classList.remove('d-none');
    fullsizeDiv.classList.remove('zoomOut');
    fullsizeDiv.classList.add('zoomIn');
}
// ! Evènements

const allOpenCases = document.querySelectorAll('.container__door');

allOpenCases.forEach(openCase => {
    openCase.addEventListener('click', (event) => {
        const clickedCase = event.currentTarget;

        if (clickedCase.getAttribute('data-date') <= dateDayNumber) {
            openDoor(clickedCase);
            localStorage.setItem('dayOpened', clickedCase.getAttribute('data-date'));
        }
    });
});
