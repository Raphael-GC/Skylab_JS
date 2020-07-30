const nome = "Raphael";
const sexo = "M";
const idade = 50;
const contribuicao = 25;
 
const tmpRest = 35 - contribuicao;
const verific = idade + contribuicao;

if (contribuicao >= 35){ //tempo mínimo para o homem.
    console.log("O tempo mínimo foi cumprido.")
    if (verific >= 95){ //regra para o homem.
        console.log("Raphael, você pode se aposentar!")
    }else{
        console.log("Raphael, você ainda não pode se aposentar!")
    }
}else{
    console.log(`O tempo mínimo ainda não foi cumprido. Restam mais ${tmpRest} na batalha.`)
}