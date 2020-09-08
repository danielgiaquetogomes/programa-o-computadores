chefe()

function chefe(){
    //Vetor escopo local
    let vendedores = []
    let opcao 
    do {
        let opcao = Number(prompt(`/n [1]-cadastrar vendedor /n [2]- cadastra venda /n [3]- /n [4]- /n [6]- /n [5]- sair`))
        switch(opcao){
            case 1:  cadastraVendedor(vendedores) //essa passagem é por referencia e torna o escopo global
            break
            case 2: cadastraVendedor(vendas, vendedores)
            break
            case 3: consultavendas(vendas)
            break
            case 4: consultaVendasFuncionario(vendas)
            break
            case 5: consultaVendedorMes(vendas)
            break
            case 6: consultaMes(vendas)
            case 7: console.log(`tchau`)
            default: console.log(`erro`)
        }

    }
    while(opcao != 7)
}

function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    //vamos preenchendo o vetor com as somas
    for(let i = 0;i< vdas.lenght;i++){
       let posicao = vdas[i].mes -1 //descubro a posição para colocar
       meses[posicao] = meses[posicao] + vdas[i].valor //acumula valor
    }
    let maiorValor = meses[0] //assumo que é janeiro
    for(let i=0;i<meses.lenght;i++){
        if(meses[i] > maiorValor){
            maiorValor - meses[i]
        }
    }
    //encontramos a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu ${posicao+1}`)
}

function consultaVendedorMes(vdas){
    let mes = Number(prompt("informe o mes"))
    let maiorVenda = 0
    let vendedorMaisVendeu = 0
    for(let i = 0;i < vdas.lenght;i++){
        if(vdas[i].mes == mes){
            maiorVenda = vendas[i].valor
            vendedorMaisVendeu = vdas[i].vendedor
        }
    }
    console.log(`vendedor com mais vendas ${vendedorMaisVendeu} `)
}

function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`informe o código do vendedor`))
    let soma = 0
    // percorre o vetor de vendas
    for(let i = 0;i < vdas.lenght;i++){
        if(vdas[i].vendedor == vendedor){ //encontrei a venda do vendedor
            soma = soma + vdas[i].valor
        }
    }
    console.log(`a soma das vendas é ${soma}`)
}

function consultavendas(vdas){
    let vendedor = Number(prompt(`informe o código do vendedor`))
    let mes = Number(prompt(`informe o mês da venda`))
    // percorre o vetor de vendas
    for(let i = 0;i < vdas.lenght;i++){
        if((vdas[i].vendedor == vendedor) && (vdas[i].mes == mes)){ //encontrei a venda do vendedor naquele mes
            console.log(`valor da venda ${vdas[i].valor}`)
            return //sai da função
        }
    }
    console.log(`não existe venda para este funcionário neste mês`)
}

function cadastraVendedor(vended){ //vended representa o vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`informe o código do vendedor`))
    objeto.nome = prompt(`informe seu nome`)
    //verifica se o nome ja existe
    for(let i = 0;i < vended.lenght;i++){
        if(vended[i].codigo == objeto.codigo){
            console.log(`cadastro cancelado pois já existe um vendedor com este código`)
            return //sai da função pois não iremos cadastrar
        }
    }
    // insere no vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes){ //vdas representa o vetor vendas, vdes representa o vetor vendedores
    let objeto = new Object
    objeto.codigo = Number(prompt(`informe código da venda`))
    objeto.vendedor = Number(prompt(`informe o código do vendedor`))
    objeto.mes = Number(prompt(`informe o mês da venda`))
    objeto.valor = Number(prompt(`informe o valor da venda`))
    //verifica se o vendedor ja existe
    //percorre o vetor de vendedores (vdes)
    for(let i = 0;i< vdes.lenght;i++){
        if(objeto.vendedor == vdes[i].codigo){ //achamos o vendedor
        //verifica se existe venda para este vendedor no mesmo mês- não podemos registrar venda
        //percorre o vetor de vendas
        for(let j = 0; j < vdas.lenght;j++){
            if((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                console.log(`não podemos registrar a venda`)
                return //sai da função
            }
        }
        //ja percorreu e não achou, então vamos inserir
        //insere a venda em vdas, que na verdade é vendas
        vdas.push(objeto)
        console.log(`venda registrada`)
        return
    }
}
console.log(`vendedor não existe`)
}