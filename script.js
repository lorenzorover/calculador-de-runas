function calcularPorcentagem() {
    const destreza = parseInt(document.getElementById("destreza").value);
    const sorte = parseInt(document.getElementById("sorte").value);
    const nivelBase = parseInt(document.getElementById("nivel-base").value);
    const runaRecipiente = parseInt(runaRecipienteEscolhida().value);
    const runaCraftada = parseInt(runaCraftadaEscolhida().dataset.chance);

    const resultadoPorcentagem = runaCraftada + (destreza / 30 + sorte / 10 + nivelBase / 10) + runaRecipiente;

    console.log(resultadoPorcentagem);

    document.getElementById("chance-craft").value = resultadoPorcentagem;

    calcularValorZeny();
}

function runaRecipienteEscolhida() {
    return document.querySelector('input[name="runa-recipiente"]:checked');
}

function runaCraftadaEscolhida() {
    return document.querySelector('input[name="runa-craftada"]:checked');
}

function calcularValorZeny() {
    const runaRecipiente = runaRecipienteEscolhida();
    const runaCraftada = runaCraftadaEscolhida().value;

    if (runaCraftada.value == "3") {

    }

    if (runaCraftada.value == "5") {

    }

    if (runaCraftada.value == "7") {
        
    }

    if (runaCraftada.value == "8") {
        
    }

    if (runaCraftada.value == "10") {
        
    }

    const calculoZeny = 20000 + parseInt(runaRecipiente.dataset.custo);

    document.getElementById("valor-zeny").value = calculoZeny;
}