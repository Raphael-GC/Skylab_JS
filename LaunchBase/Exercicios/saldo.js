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

function calcSaldo(receitas, despesas) {
    let mais = 0;
    let menos = 0;
    let saldoIn = 0;
    for (let i = 0; i < receitas.length; i++) {
        mais = mais + receitas[i];
    }
    for (let i = 0; i < despesas.length; i++) {
        menos = menos + despesas[i];
    }
    saldoIn = mais - menos;
    saldoIn = parseFloat(saldoIn.toFixed(2)); //Arredondamento
    return saldoIn;
} 

let saldo = 0;
let polar = "";
for (let i = 0; i < usuarios.length; i++) {
    saldo = calcSaldo(usuarios[i].receitas, usuarios[i].despesas);
    if (saldo >= 0) polar = "POSITIVO"; else polar = "NEGATIVO";
    console.log(`${usuarios[i].nome} possui saldo ${polar} de ${saldo}`)
};