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
    myImg.addEventListener('click', (e)=>zoomIn(opCase))
}

function zoomIn(clickedCase) {
    const dayNumber = clickedCase.getAttribute('data-date');
    fullsizeImg.classList.remove('d-none');
    fullsizeImg.classList.remove('zoomOut');
    fullsizeImg.classList.add('zoomIn');

    fetch('./public/assets/json/base.json')
        .then(response => response.json())
        .then(data => {
            const selectedItem = data.find(item => item.id == dayNumber);

            updateCard(selectedItem);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
}

function zoomOut() {
    fullsizeImg.classList.remove('zoomIn');
    fullsizeImg.classList.add('zoomOut');
    setTimeout(() => {
        fullsizeImg.classList.add('d-none');
    }, 1000);
}




function updateCard(data) {

    const fullsizeDiv = document.querySelector('.fullsize');
    const cardImg = fullsizeDiv.querySelector('.card-img-top');
    const cardTitle = fullsizeDiv.querySelector('.card-title');
    const cardText = fullsizeDiv.querySelector('.card-text');
    const btnPrimary = fullsizeDiv.querySelector('.btn-primary');

    cardImg.src = `./public/assets/img/img_big/${data.img}`;
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
