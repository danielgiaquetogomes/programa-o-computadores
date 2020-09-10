chefe()

function chefe(){
    //declarar uma matriz
    let matriz = [] //uma matriz é um vetor
    // vamos criar uma matriz com 3 linhas
    matriz[0] = []  // cada linha da matriz é um vetor
    matriz[1] = []  // cada linha da matriz é um vetor
    matriz[2] = []  // cada linha da matriz é um vetor
    cadastra(matriz) //cadastra 3 alunos
    consultaMediaAlunos(matriz) //calcula a média das notas
}

function cadastra(mat){ // mat representa a matriz na função chefe()
    for(let i = 0; i< 3;i++){
        alert(`informe 4 notas do aluno ${i+1}`)
        for(letj=0;j<4;j++){
           mat[i][j] = Number(prompt(`informe a nota ${j+1}`))
        }
    }
}

function cosultaMediaAlunos(mat){ // mat representa a matriz na função chefe
    let medias = []
    for(let i = 0;i < 3;i++){//para cada aluno
      medias[i] = 0 // média de nota do aluno i
      for(let j=0;j<4;j++){ //para cada nota
        //soma no vetor a posição i
        medias[i] = medias[i] + mat[i][j]
    }
    //acabaram as notas do aluno i
    medias[i] = medias[i]/4
    }
    console.log(`Valor das médias ${medias}`)
}