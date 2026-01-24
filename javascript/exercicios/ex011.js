var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log("Hoje é Domingo")
        break
    case 1:
        console.log("Hoje é segunda-feira")
        break
    case 2:
        console.log("Hoje é terça-feira")
        break
    case 3:
        console.log("Hoje é Quarta-feira")
        break
    case 4:
        console.log("Hoje é quinta-feira")
        break
    case 5:
        console.log("Hoje é sexta-feira")
        break
    default:
        console.log("Hoje é sábado")
        break
}