function trocarimagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'midia/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}
function qualanimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+animal);
}