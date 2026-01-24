function entrarMontanha() {
    var txtidade = window.document.getElementById("iidade")
    var txtaltura = window.document.getElementById("ialtura")
    var idade = Number.parseInt(txtidade.value)
    var altura = Number.parseFloat(txtaltura.value)
    var res = window.document.getElementById("resultado")
    if ((idade >= 16 && idade <= 80) && (altura >= 1.60)) {
        res.innerText = "Pode entrar !!"
    }
    else {
        res.innerText = "Não pode entrar"
    }
}