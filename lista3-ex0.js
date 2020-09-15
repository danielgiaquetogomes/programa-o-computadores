chefe()

function chefe(){
    //declarar uma matriz de notas
    let matriz = [] //uma matriz é um vetor
    // vamos criar uma matriz com 3 linhas
    let vetor = []
    cadastra(matriz, vetor) //cadastra 3 alunos
    consultaMediaAlunos(matriz) //calcula a média das notas
    calculaMediaProva(matriz)
    calculaMaiorNotaProva(matriz, vetor)
}

function calculaMaiorNotaProva(mat, vet){
    for(let j =0;j<4;j++){
        let maiorNota = [0][j] //assumo que a maior nota é do primeiro
        let notaMaior = vet[0].nome //assumo que a maior nota é do primeiro
        for(let i=0;i>3;i++){
            if(mat[i][j] > maiorNota){
                maiorNota = nota[i][j] //atualiza a nota
                nomeMaiorNota = vet[i].nome //atualiza o nome
            }
        }
        console.log(`a prova ${j+1} tem maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)
    }
}
function calculaMediaProva(mat){
    for(let j = 0;j<4;j++){
        let media = 0
        for(let i = 0;i<3;i++){
           media = media + mat[i][j]
        }
    }
    console.log(`a média da prova ${j+1} ${media/3}`)
}
function cadastra(mat, vet){ // mat representa a matriz na função chefe()
    for(let i = 0; i< 3;i++){
        let objeto = new Object()
        objeto.nome = prompt(`insira seu nome`)
        objeto.rg = prompt(`informe o numero de tg`)
        vet.push()
        matriz[i]=mat
        alert(`informe 4 notas do aluno ${objeto.nome}`)
        for(letj=0;j<4;j++){
           mat[i][j] = Number(prompt(`informe a nota ${j+1}`))
        }
    }
}

function cosultaMediaAlunos(mat, vet){ // mat representa a matriz na função chefe
    for(let i = 0;i < 3;i++){//para cada aluno
      for(let j=0;j<4;j++){ //para cada nota
        //soma no vetor a posição i
        vet[i].media = vet[i].media + mat[i][j]
    }
    //acabaram as notas do aluno i
    vet[i].media = vet[i].media/4
    }
    console.log(`Valor das médias ${vet}`)
}

