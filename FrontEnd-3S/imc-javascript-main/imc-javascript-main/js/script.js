function calcular() {
    const nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    console.log(altura);
    console.log(peso);

    // verificar se tem campos vazios
    if (
        nome.trim().length == 0 || 
        isNaN(altura) || 
        isNaN(peso)
    ){
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    console.log("Campos preenchidos corretamente.");

}