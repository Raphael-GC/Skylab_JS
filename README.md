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
  <a href="#bulb-a-ideia">A Ideia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ballon-git">Git</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-javascript">JS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#eyeglasses-html">HTML</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-css">CSS</a>
</p>

<br>

## :bulb: A Ideia

Decidi registrar todas as minhas dúvidas e lições aprendidas durante o curso, no intuito de mensurar a curva de aprendizado obtida.

## :balloon: Git e Markdown

```bash
# Como criar e subir um repositório para o github pelo terminal.
$ echo "# Skylab_JS" >> README.md
$ git init
$ git add README.md
$ git commit -m "Primeiro commit"
$ git remote add origin git@github.com:Raphael-GC/Skylab_JS.git
$ git push -u origin master
```
```bash
# Comentários em MD.
[//]: <> (Exemplo de como comentar em Markdown)
```


## :gear: Javascript

```javascript
# ERRO.1 : "Uncaught SyntaxError: Invalid shorthand property initializer"
# Esse erro foi exibido no console do navegador ao testar arquivo index.html 
# Lição E1: Em JS usamos ':' e não '=' para atribuir valor à uma propriedade de objeto; e finalizamos a linha com ',' ao #invés de  ';' 
 var aluno = {
      nome : 'Raphael',
      idade : 28,
      peso : 72.5,
      humano : true,
 };

_______________________________________________________________________________________________________________________________________

# Lição N1: Em JS usamos '===' quando além de comparar o valor de uma variável, compararmos o tipo.
 if (1 === "1")
# Neste exemplo o resultado seria: 'false' 
```
**Aula 06 - Condicionais**:

- If, Else If e Else

![Example 1](.github/examples/Aula.06_if_else-if_else.png)


- Switch

![Example 2](.github/examples/Aula.06_switch.png)

**Aula 07 - Operadores Lógicos**:

- And
```sh
# Verifica se há igualdade em todas as informações propostas. Usamos o '&&' para representá-lo.
```
![Example 1](.github/examples/Aula.07_and.png)

- Or
```sh
# Verifica se há igualdade em alguma das informações propostas. Usamos o '||' para representá-lo.
```
![Example 2](.github/examples/Aula.07_or.png)

- Not
```sh
# Verifica se há uma desigualdade nas informações propostas. Usamos o '!==' para representá-lo.
```
![Example 3](.github/examples/Aula.07_not.png)

- Enxugando Ifs desnecessários
```sh
# Desta forma, atribuimos uma condição como valor para uma variável, diminuindo a verbosidade do código.
```
![Example 4](.github/examples/Aula.07_enxugando_ifs.png)

- Condição Ternária
```sh
# Mais um exemplo de redução da verbosidade do código.
```
![Example 5](.github/examples/Aula.08_condicao_ternaria.png)

**Aula 09 - Estruturas de Repetição**:

- For
```sh
# Melhor utilizado quando se sabe quantas vezes se deseja repetir aquele bloco de código.
```
![Example 1](.github/examples/Aula.09_for.png)

- While
```sh
# Melhor utilizado quando NÃO se sabe quantas vezes aquele bloco de código irá se repetir.
```
![Example 2](.github/examples/Aula.09_while.png)

**Aula 10 - Intervalo e Timeout**:

- Interval
```sh
# Repete a função a cada período de tempo, passados como parâmetros respectivamente.
```
![Example 1](.github/examples/Aula.10_interval.png)

- Timeout
```sh
# Atrasa a execução da função de acordo com período de tempo informado.
```
![Example 2](.github/examples/Aula.10_timeout.png)

**Exercícios (somente respostas)**: [Questões](.github/examples/Exercícios.pdf)

- 1º exercício
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

```javascript
# Lição N2: Em JS, chamamos Template Strings, quando o texto esta envolvido por acentos graves, ao inves de aspas simples ou duplas. Se distingue das demais por permitir a inclusao de variaveis dentro de seu escopo.
const nome = "Rapha"
const nome2 = 'Jose'
const nome3 = `Samuel e ${nome}`  //--> Template String

console.log(nome3)
```

## :eyeglasses: HTML

```bash
# 
$
```

## :art: CSS

```bash
# 
$
```
---