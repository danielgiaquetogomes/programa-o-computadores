
chefe()

function chefe(){
    var vetor = [] //declara o vetor
    exe7()  // estamos passando como parâmetro - escopo global
    console.log(vetor)
    calculaMedia(vetor)
}

function exe7(vet){ //vet representa vetor -> oq será feito em vet, será feito em vetor
    var número = Number(prompt("informe um número"))
    do{
        //coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt("informe outro número, informe número negativo para cancelar o programa"))

    }
    while(numero >= 0) 
}

function calculaMedia(vet){
    var soma = 0
    for(i = 0;i < vet.lenght ; i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.lenght}`)
}