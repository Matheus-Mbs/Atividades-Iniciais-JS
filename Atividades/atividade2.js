{
    let altura = 0;
    let peso = 0;
    let IMC = 0;

    function calcularIMC(){
        peso = prompt('Digite seu peso em Quilogramas: ');
        altura = prompt('Digite sua altura em metros(Ex: 1.76): ');

        return peso/(altura**2);
    }

    IMC = calcularIMC();

    if(IMC < 18.5){
        alert('Classificação: Magreza');
    }
    else if(IMC > 18.5 && IMC < 24.9){
        alert('Classificação: Normal');
    }
    else if(IMC > 25 && IMC < 29.9){
        alert('Classificação: Sobrepeso');
    }
    else if(IMC > 30 && IMC < 39.9){
        alert('Classificação: Obesidade');
    }
    else if(IMC > 40){
        alert('Classificação: Obesidade Grave');
    }
}