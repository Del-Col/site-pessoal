function digitou(e) {
    if(e.keyCode == 13) { // enter
        let escrito = document.querySelector('.campo').nodeValue;

        console.log(escrito);
    }
}