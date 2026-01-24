function contar() {
    let numInicio = window.document.getElementById("inumInicio");
    let numFim = window.document.getElementById("inumFim");
    let passo = window.document.getElementById("inumincr");
    let textResultado = window.document.getElementById("msgResultado");

    if (numInicio.value.length == 0 ||  numFim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO: faltam dados!");
    }
    else {
        textResultado.innerHTML = "Contando:\n";
        let ini = Number(numInicio.value);
        let fim = Number(numFim.value);
        let pass = Number(passo.value);

        for (let i = ini; i <= fim; i += pass) {
            textResultado.innerHTML += `${i} \u{1F449}`;
        }
        textResultado.innerHTML += `\u{1F3F4}`;
    }

    
}