var agora = new Date()
var hora = agora.getHours()
hora = 10
var fundoBody = window.document.body
var textoHoras = window.document.getElementById("mensagemHoraDoDia")
var imagem = window.document.getElementById("imagem")

textoHoras.innerText = `Agora são ${hora} horas`

if (hora > 0 && hora < 12) {
    imagem.src = 'Amanhecer01.jpg'
    fundoBody.style.backgroundColor = "rgb(247, 229, 128)"
}
if (hora >= 12 && hora < 18) {
    imagem.src = 'tarde.jpg'
    fundoBody.style.backgroundColor = "rgb(245, 179, 93)"
}
if (hora >= 18) {
    imagem.src = 'noite.jpeg'
    fundoBody.style.backgroundColor = "rgb(73, 73, 73)"
}
