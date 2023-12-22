document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menu');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImg = document.getElementById('modal-img');
    const modalRecipe = document.getElementById('modal-recipe');

    async function loadMenuData() {
        try {
            const response = await fetch('base.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur de chargement du fichier JSON:', error);
        }
    }

    async function generateImages() {
        const menuData = await loadMenuData();
        let row;

        for (let i = 0; i < menuData.length; i++) {
            if (i % 6 === 0) {
                row = document.createElement('div');
                row.classList.add('row');
                menuContainer.appendChild(row);
            }

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = menuData[i].thumb;
            img.alt = menuData[i].title;
            img.addEventListener('click', function () {
                displayModal(menuData[i]);
            });

            imgContainer.appendChild(img);
            row.appendChild(imgContainer);
        }
    }

    function displayModal(plat) {
        modalTitle.textContent = plat.title;
        modalDescription.textContent = plat.description;
        modalImg.src = plat.img;
        modalRecipe.href = plat.recipe;

        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    generateImages();

    window.closeModal = closeModal;
});
