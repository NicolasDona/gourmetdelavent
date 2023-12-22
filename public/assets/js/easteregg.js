// Fonction random pour les liens de jeux du easterEgg.

const btn = document.getElementById('easter-egg');

function go_to(url) {
    window.open(url, '_blank');
}

function rand_link() {
    let a;
    a = 1 + Math.round(Math.random() * 5);   // a = random number between 1-5
    if (a == 1) go_to("https://cedricdre.github.io/jeux_pendu/");
    if (a == 2) go_to("https://jingferment.github.io/Jeu_du_pendu/");
    if (a == 3) go_to("https://kelaven.github.io/JDPproject/index.html");
    if (a == 4) go_to("https://projetpro.lescigales.org/pendu/index.html");
    if (a == 5) go_to("https://braizou.github.io/snake_pwa/");
}

btn.addEventListener("click", rand_link);