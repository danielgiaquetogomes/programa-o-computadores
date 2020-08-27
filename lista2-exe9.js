chefe()

function chefe(){
    var numero = Number(prompt("informe um número"))
    exe9(numero)
    
}

function exe9(num){
    var soma = 0
    for(var divisor = num; divisor >= i; divisor--){//divisor começa em 6 e vai até 1
        if(num % divisor == 0){
            soma = soma + divisor
        }

    }
    //versão aternativa:
    /*for(var divisor = 1; divisor <=num;divisor++){//divisor vai de 1 até o 6
       if(num % divisor == 0){
        soma = soma + divisor
       }
    }*/

    // chegamos na versão final e testada do exe9
    console.log(`a soma dos divisores de ${num} é ${soma}`)
}