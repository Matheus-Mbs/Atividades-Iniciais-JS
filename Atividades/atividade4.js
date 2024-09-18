{
    let op = 0;
    let result = 0;
    let num1 = 0;
    let num2 = 0;
    op = parseFloat(prompt('1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\nSelecione uma operação: '));

    num1 = parseFloat(prompt('Digite o primeiro valor: '));
    num2 = parseFloat(prompt('Digite o segundo valor: '));

    if(op === 1){
        result = num1 + num2;
    }
    else if(op === 2){
        result = num1 - num2;
    }
    else if(op === 3){
        result = num1 * num2;
    }
    else if(op === 4){
        result = num1 / num2;
    }

    alert(`O resultado é: ${result.toFixed(2)}`)
}