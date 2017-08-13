'use strict';

//Comentario
(function (window, document) {
var menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

function toggleMenu() {

    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
};

function closeMenu() {
    if (menu.classList.contains('open')) {
        toggleMenu();
    }
}

document.getElementById('toggle').addEventListener('click', function (e) {
    toggleMenu();
});

window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(window, document);


//Comentário
(function (window, document) {

var comentario = document.getElementById('comentario');

comentario.addEventListener('click', function (e) {
    e.preventDefault();
    carregarComentario();
    
});

function carregarComentario() {

    var disqu = document.getElementById("disqus_thread");

    if (disqu.style.visibility === 'hidden') {      
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//matematica-livre.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
         disqu.style.visibility = 'visible';
         comentario.innerHTML = 'Ocultar comentário';

    }
    else {
        disqu.style.visibility = 'hidden';
        comentario.innerHTML = 'Exibir comentário';
    }
  
};

})(window, document);

