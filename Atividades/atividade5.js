{
    let lista = [0,0,0];
    let maior = -Infinity;

    for(let i = 0; i < 3; i++){
        lista[i] = parseFloat(prompt('Digite um valor: '));

        if(lista[i] > maior){
            maior = lista[i];
        }
    }

    alert(`Maior valor: ${maior.toFixed(2)}`);
}