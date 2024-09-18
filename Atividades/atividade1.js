{
    alert('Você irá digitar 3 notas e irei calcular a média ponderada');

    let notas = [0,0,0,0];
    let pesos = [0,0,0,0];

    function receberNotas(){
        for(let i = 1; i <= 3; i++){
            notas[i] = parseFloat(prompt(`Digite o valor da nota ${i}: `));
            pesos[i] = parseFloat(prompt(`Digite o peso da nota ${i} : `));
        }
    }

    function calcularMedia(){
        let totalNotas = 0;
        let totalPesos = 0;
        for(let i = 1; i <= 3; i++){
            totalNotas += notas[i] * pesos[i];
            totalPesos += pesos[i];
        }

        return totalNotas/totalPesos;
    }

    receberNotas();
    let media = calcularMedia();

    alert(`O resultado da média é: ${media.toFixed(2)}`);
}