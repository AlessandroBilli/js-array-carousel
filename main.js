'use strict'



document.addEventListener('DOMContentLoaded', function () {
    
    const immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg.","img/05.jpg."];
    const indiceCorrente = 0;

    const items = document.querySelectorAll('.item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    
    function inizializzaCarosello() {
        mostraImmagineCorrente();
        prevButton.addEventListener('click', mostraImmaginePrecedente);
        nextButton.addEventListener('click', mostraImmagineSuccessiva);
    }

   
    function mostraImmagineCorrente() {
        items.forEach(function (item, index) {
            item.style.display = index === indiceCorrente ? 'block' : 'none';
        });
    }

    
    function mostraImmaginePrecedente() {
        indiceCorrente = (indiceCorrente - 1 + immagini.length) % immagini.length;
        mostraImmagineCorrente();
    }

    
    function mostraImmagineSuccessiva() {
        indiceCorrente = (indiceCorrente + 1) % immagini.length;
        mostraImmagineCorrente();
    }

    
    inizializzaCarosello();
});
