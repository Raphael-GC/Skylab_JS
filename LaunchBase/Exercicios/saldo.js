const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

let msg = "";
function calcSaldo(receitas) {
    let mais = 0;
    let menos = 0;
    for (let i = 0; i < receitas.length; i++) {
        mais = mais + receitas[i];
    }
    return mais;
} 
msg = calcSaldo(usuarios[1]);
console.log(msg);

// exercicio ainda esta incompleto !