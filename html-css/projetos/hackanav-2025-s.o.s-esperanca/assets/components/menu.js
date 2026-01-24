function clickmenu() {
    if (areaMenuMobile.style.display == 'block') {
        areaMenuMobile.style.display = 'none'
    }
    else {
        areaMenuMobile.style.display = 'block'
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 768) {
        areaMenuMobile.style.display = 'block'
    }
    else {
        areaMenuMobile.style.display = 'none'
    }
}