chefe()

function chefe(){
    //Vetor escopo local
    let vendedores = []
    let opcao 
    do {
        let opcao = Number(prompt(`/n [1]-cadastrar vendedor /n [2]- cadastra venda /n [3]- sair`))
        switch(opcao){
            case 1:  cadastraVendedor(vendedores) //essa passagem é por referencia e torna o escopo global
            break
            case 2: cadastraVendedor(vendas, vendedores)
            break
            case 3: console.log(`tchau`)
            default: console.log(`erro`)
        }

    }
    while(opcao != 3)

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