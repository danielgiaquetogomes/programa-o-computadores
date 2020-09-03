chefe()

function chefe(){
    // não mais vamos declarar variáveis usando a palavra chave var (escopo global)
    // a partir de agora vamos declarar usando o let (escopo local da função de onde é declarado)
    let vetor = [] // este vetor irá existir apenas dentro dessa função
    do{
        var opcao = Number(prompt(`digite /n [1]. Entrada /n [2]. Media idade /n [3]. Maior idade /n [4]. Qtde /n [5]. Percentual /n [6]. Saída`))
        switch(opcao){
            case 1: entrada(vetor) //estamos passando uma referencia na memória do vetor
            break
            case 2: calcularMedia(vetor) //estamos passando uma referencia na memória do vetor
            break
            case 3: calcularMaiorIdade(vetor) //estamos passando uma referencia na memória do vetor
            break
            case 4: calcularQtde(vetor) //estamos passando uma referencia na memória do vetor
            break
            case 5: calcularPercentual(vetor) //estamos passando uma referencia na memória do vetor
            break
            case 6: console.log(`Obrigado por utilizar nosso programa`)
            break
            default: console.log(`Opção inválida, tente novamente`)
        }
    }
    while(opcao != 6)
}

function entrada(vet){  //vet vai apontar para vetor
    console.log("Entrou na função entrada")
    //cria objeto
    let objeto = new Object()
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase //converte para letra maiscula
    objeto.altura = Number(prompt(`Informe a altura`))
    objeto.idade = Number(prompt(`Informe sua idade`))
    objeto.olhos = prompt(`Informe a cor dos olhos, A (azuis), V (verde), C (castanho)`).toUpperCase //converte para letra maiscula
    //vamos inserir em vetor e não em vet
    vet.push(objeto)
    console.log("habitante inserido com sucesso")

}

function calcularMedia(vet){  //vet vai apontar para vetor
    console.log("Entrou na função calcular media")
    let soma = 0
    let qtde = 0
    for(let i = 0;i < vet.lenght;i++){
        if((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
        soma = soma + vet[i].idade
        qtde++
    }
    console.log(`A média de idade é ${soma/qtde}`)
}
}

function calcularMaiorIdade(vet){  //vet vai apontar para vetor
    console.log("Entrou na função calcular maior idade")
    let maiorIdade = vet[0].idade
    for(let i= 1; i < vet.lenght; i++){
        maiorIdade = vet[i].idade //atualiza a maior idade
    }
    console.log(`A maior idade é ${maiorIdade}`)
}

function calcularQtde(vet){  //vet vai apontar para vetor
    console.log("Entrou na função calcular quantidade")
    let qtde = 0
    for(let i = 0;i < vet.lenght; i++){
        if(((vet[i].sexo == "F") && (vet[i].idade >= 20) && (vet[i].idade <= 45))
        ||
        (vet[i].olhos == "A") && (vet[i].altura < 1.70)){
            qtde++
        }
    }
    console.log(`a quantidade é de ${qtde}`)
}

function calcularPercentual(vet){  //vet vai apontar para vetor
    console.log("Entrou na função calcular percentual")
    let conta = 0
    for(let i = 0;i < vet.lenght;i++){
        if(vet[i].sexo == "M"){
            conta++
        }
    }
    console.log(`O percentual de homens é de ${(conta/vet.lenght)*100}`)
}
