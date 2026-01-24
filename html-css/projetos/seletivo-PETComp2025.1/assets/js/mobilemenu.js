function clickMenu(){
    if (document.getElementById('areamenu').style.display == 'block') {
        document.getElementById('areamenu').style.display = 'none'
    }
    else {
        document.getElementById('areamenu').style.display = 'block'
    }
}

function mudarTamanho() {
    if (document.getElementById('areamenu').style.display >= 768) {
        document.getElementById('areamenu').style.display = 'block'
    }
    else {
        document.getElementById('areamenu').style.display = 'none'
    }
}