const turmaA = [
    { nome: "Raphael", nota: 10 },
    { nome: "Thiago", nota: 13 },
    { nome: "Joao", nota: 11}
]

const turmaB = [
    { nome: "Jaco", nota: 7 },
    { nome: "Victor", nota: 12 },
    { nome: "Bruno", nota: 6.5 }
]


function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)

function enviaMensagem(media, turma) {
    // Se a media for maior que 6, parabeniza a turma.
    if (media > 6) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

// Encontrando a maior nota no vetor turma.
function maiorNota(alunos) {
    let maior = [];
    for (let i = 0; i < alunos.length -1; i++) {
        maior = alunos[i+1];
        if (alunos[i].nota > alunos[i+1].nota || alunos[i].nota > maior) {
           maior =  alunos[i];
        }  
    } return maior;
}

enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')
const maiorNotaA = maiorNota(turmaA)
console.log(`A maior nota da turma A foi ${maiorNotaA.nota}, do aluno ${maiorNotaA.nome}`)
const maiorNotaB = maiorNota(turmaB)
console.log(`A maior nota da turma B foi ${maiorNotaB.nota}, do aluno ${maiorNotaB.nome}`)