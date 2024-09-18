{
    let quantiaReais = prompt('Digite um valor em R$(Ex: 107.9): ');

    let usd = quantiaReais * 5.46;
    let eur = quantiaReais * 6.07;

    alert(`Valor em Doláres: US$${usd.toFixed(2)} \nValor em Euro: €${eur.toFixed(2)}`);
}