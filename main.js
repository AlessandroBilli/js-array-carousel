'use strict'



document.addEventListener('DOMContentLoaded', function () {
    
    let immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg.","img/05.jpg."];
    let indiceCorrente = 0;

    let items = document.querySelectorAll('.item');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

    
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
