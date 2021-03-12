const turmaA = [
    { nome: "Raphael", nota: 10 },
    { nome: "Thiago", nota: 4 },
    { nome: "Joao", nota: 3}
]

const turmaB = [
    { nome: "Jaco", nota: 7 },
    { nome: "Victor", nota: 2 },
    { nome: "Bruno", nota: 6.5 }
]

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`o Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(turmaA)
alunoReprovado(turmaB) 