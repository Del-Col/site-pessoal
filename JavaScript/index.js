function subirtela() {
    window.scrollTo ({
        top:0,
        behavior: "smooth"
    });
}

function botao() {
    if(window.scrollY === 0) {
        // ocultar botão
        document.querySelector('.scrollbutton').style.display = "none";
    } else {
        // mostrar botão
        document.querySelector('.scrollbutton').style.display = "block";
    }
}

window.addEventListener('scroll', botao);

function trocarimagem(filename) {
    document.querySelector('.img-header').setAttribute('src', 'midia/'+filename);
    document.querySelector('.imagem').setAttribute();
}
