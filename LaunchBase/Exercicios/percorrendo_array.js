const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

// Exercicio 1 (Imprime cada colaborador e suas respectivas tecnologias)
for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`); 
};

// Exercicio 2 (Le o vetor tech e filtra se a pessoa trabalha com CSS e guarda em cssCheck quando positivo)
function cssUserCheck(techs) {
    let cssCheck = "";
    for (let i = 0; i < techs.length; i++) {
        if (techs[i] === "CSS"){
            cssCheck = true; 
        }
        else{ 
            cssCheck = false; 
        }   
    }return cssCheck;
}
// Percorro o vetor user e a cada user(indice) em que a function cssUserCheck validar positivo, sera impresso o nome do user.
for (let i = 0; i < usuarios.length; i++) {
    let cssUser = "";
    cssUser = cssUserCheck(usuarios[i].tecnologias);
    if (cssUser) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
};
