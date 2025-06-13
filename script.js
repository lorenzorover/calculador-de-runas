function calcularPorcentagem() {
    const destreza = parseInt(document.getElementById("destreza").value);
    const sorte = parseInt(document.getElementById("sorte").value);
    const nivelBase = parseInt(document.getElementById("nivel-base").value);
    const runaRecipiente = parseInt(document.querySelector('input[name="runa-recipiente"]:checked').value);
    const runaCraftada = parseInt(document.querySelector('input[name="runa-craftada"]:checked').value);

    const resultadoPorcentagem = runaCraftada + (destreza / 30 + sorte / 10 + nivelBase / 10) + runaRecipiente;

    console.log(resultadoPorcentagem);

    document.getElementById("chance-craft").value = resultadoPorcentagem;
}

function calcularValorZeny() {

}