const dev = {
    nome: 'Raphael',
    idade: '29',
    techs: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' } 
    ]
}

console.log(`O usuario ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.techs[0].nome} com especialidade em ${dev.techs[0].especialidade}`)