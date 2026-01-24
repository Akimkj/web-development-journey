function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNascimento = Number(window.document.getElementById("ianoNascimento").value)
    var idade = anoAtual - anoNascimento
    var sexo = window.document.getElementsByName("sexo")
    window.document.getElementById("alertaDados").style.display = "none"

    window.document.getElementById("resultados").style.display = "flex"
    
    var textoResultado = window.document.getElementById("textResultado")
    var imagem = window.document.getElementById("foto")

    if (sexo[0].checked) {
        textoResultado.innerText = `Foi detectado homem com ${idade} anos de idade`
        if (idade > 0 && idade <= 14) {
            imagem.src = "homemCrianca.jpg"
        }
        else if (idade > 14 && idade <= 45) {
            imagem.src = "homemAdulto.jpg"
        }
        else {
            imagem.src = "homemVelho.jpg"
        }
    }
    else if (sexo[1].checked) {
        textoResultado.innerText = `Foi detectado mulher com ${idade} anos de idade`
        if (idade > 0 && idade <= 14) {
            imagem.src = "mulherCrianca.jpg"
        }
        else if (idade > 14 && idade <= 32) {
            imagem.src = "mulherJovem.jpeg"
        }
        else if (idade > 32 && idade <= 59) {
            imagem.src = "mulherAdulta.jpeg"
        }
        else {
            imagem.src = "mulherVelha.jpg"
        }
    }
    
   
    
    
}