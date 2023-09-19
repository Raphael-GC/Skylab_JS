<h1 align="center">
    <img alt="MyNotepadLogo" title="#MyNotepad" src=".github/mynotepad.svg" width="200px" />
</h1>

<h4 align="center"> 
  :memo: "A tinta mais fraca..." Já sabem o resto, né? :nerd_face:
</h4>

<p align="center">
    <a href="https://github.com/Raphael-GC/Skylab_JS/stargazers">
        <img alt="Stargazers" src="https://img.shields.io/github/stars/Raphael-GC/Skylab_JS?style=social">
    </a>
    <a href="https://github.com/Raphael-GC/Skylab_JS/commits/master">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Raphael-GC/Skylab_JS">
    </a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/Raphael-GC/Skylab_JS">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Raphael-GC/Skylab_JS?color=%27072009">
</p>

<p align="center">
  <a href="#gear-javascript">JS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## :gear: Javascript

#### :warning: Erro
N1 : "_Uncaught SyntaxError: Invalid shorthand property initializer_"
Esse erro foi exibido no console do navegador ao testar arquivo **index.html**.

:seedling: Em JS usamos '**:**' e não '**=**' para atribuir valor à uma propriedade de objeto; e finalizamos a linha com '**,**' ao invés de  '**;**' .
```javascript
 var aluno = {
      nome : 'Raphael',
      idade : 28,
      peso : 72.5,
      humano : true,
 };
```

#### :book: Lição 
N2: Em JS usamos '**===**' quando além de comparar o valor de uma variável, compararmos o tipo.
```javascript
 if (1 === "1")
```
Neste exemplo o resultado seria: **false**

**Aula 06 - Condicionais**:

- If, Else If e Else

![Example 1](.github/examples/Aula.06_if_else-if_else.png)


- Switch

![Example 2](.github/examples/Aula.06_switch.png)

**Aula 07 - Operadores Lógicos**:

- **And**

Verifica se há igualdade em todas as informações propostas. Usamos o '**&&**' para representá-lo.

![Example 1](.github/examples/Aula.07_and.png)

- **Or**

Verifica se há igualdade em alguma das informações propostas. Usamos o '**||**' para representá-lo.

![Example 2](.github/examples/Aula.07_or.png)

- **Not**

Verifica se há uma desigualdade nas informações propostas. Usamos o '**!==**' para representá-lo.

![Example 3](.github/examples/Aula.07_not.png)

- **Enxugando Ifs desnecessários**

Desta forma, atribuimos uma condição como valor para uma variável, diminuindo a verbosidade do código.

![Example 4](.github/examples/Aula.07_enxugando_ifs.png)

- **Condição Ternária**

Mais um exemplo de redução da verbosidade do código.

![Example 5](.github/examples/Aula.08_condicao_ternaria.png)

**Aula 09 - Estruturas de Repetição**:

- **For**

Melhor utilizado quando se sabe quantas vezes se deseja repetir aquele bloco de código.

![Example 1](.github/examples/Aula.09_for.png)

- **While**

Melhor utilizado quando NÃO se sabe quantas vezes aquele bloco de código irá se repetir.

![Example 2](.github/examples/Aula.09_while.png)

**Aula 10 - Intervalo e Timeout**:

- **Interval**

Repete a função a cada período de tempo, passados como parâmetros respectivamente.

![Example 1](.github/examples/Aula.10_interval.png)

- **Timeout**

Atrasa a execução da função de acordo com período de tempo informado.

![Example 2](.github/examples/Aula.10_timeout.png)

**Exercícios (somente respostas)**: [Questões](.github/examples/Exercícios.pdf)

- 1º exercício (Eu ainda não conhecia template string. rsrs)
```javascript
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
            
function exibicao() {
    console.log('O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro + ', na rua ' + '"' + endereco.rua + '" ' + 'com o n° ' + endereco.numero + '.');
};

exibicao();
```


#### :book: Lição 
N3: Em JS, chamamos **Template Strings**, quando o texto esta envolvido por acentos graves, ao inves de aspas simples ou duplas. Se distingue das demais por permitir a inclusao de variaveis dentro de seu escopo.
```javascript
const nome = "Rapha"
const nome2 = 'Jose'
const nome3 = `Samuel e ${nome}`  //--> Template String

console.log(nome3)
```

#### :book: Lição
N4: Hoje aprendi uma nova maneira de escrever a estrutura de repetição **for**. No exemplo abaixo, ele está sendo utilizado para percorrer um array de alunos. Onde, de forma ele inteligente, ele repetirá a verificação de acordo com o tamanho do array passado como parâmetro. E também, conheci o console.table, que é uma forma muito mais apresentável de exibir o resultado dessa função do exemplo.
```javascript
function marcarComoReprovado(alunos) {
    for (let aluno of alunos) {
        aluno.reprovado = false;
        if (aluno.nota < 5) {aluno.reprovado = true}
    }
    console.table(alunos)
}
```
#### :book: Lição
N5: Diferenças entre VAR e LET - Javascript

➜ DECLARAÇÃO:
O tipo VAR permite que a variável seja redeclarada mais de uma vez. Já as do tipo LET não permitem essa redeclaração (de forma global), apenas a mudança do seu valor.

➜ ESCOPO:
• LET: Tem escopo de bloco {...}, ou seja, se uma variável é declarada com o LET entre chaves, seu escopo será apenas esse bloco.

• VAR: Quando declarada em uma função seu valor só pode ser acessado dentro do escopo dessa função, já se for declarada no programa principal, ela terá escopo global.

#### :book: Lição
N6: Conceito de Function e Method- Javascript
```javascript
Chamamos 'Method' toda Function atrelada a um Object. Por exemplo, em console.log(), console é o objeto, log é uma funcionalidade atribuída à este objeto, ou seja, um método.
```
