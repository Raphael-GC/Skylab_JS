<h1 align="center">
    <img alt="MyNotepadLogo" title="#MyNotepad" src="https://github.com/Raphael-GC/Skylab_JS/blob/main/.github/mynotepad.svg" width="200px" />
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
  <a href="#art-css">CSS</a>
</p>

<br>

## :art: CSS
N1: Pesos e Ordem de prioridade entre seletores

No CSS é natural que organizemos alguns seletores de elementos de forma cascateada. Com isso, pode ocorrer de ficarmos em dúvida sobre qual instrução prevalecerá sobre a outra. Pois mesmo que estejam aninhadas, não é tão óbvio que a instrução passada ao seletor pai prevaleça sobre o seletor filho, devido a cada elemento possuir um peso padrão já atribuído. Para sabermos o peso de cada elemento basta posicionarmos o mouse em cima do mesmo que irá aparecer algo neste padrão (x,y,z), contendo zero ou um no lugar das letras. Onde 001 é o menor valor e 111 o maior. Além disso, se duplicarmos o seletor e elemento mas com instruções diferentes e conflitantes, como por exemplo, instruindo por duas vezes o mesmo elemento a mudar a cor de fundo, mas com cores distinstas, será respeitada sempre a última instrução.

Hoje aprendi a diferença entre setar um display block e um display inline em um determinado elemento. No primeiro, se não houver largura predeterminada, o elemento tomará toda a largura disponível na página. Já, no display inline o primeiro elemento é empurrado para a esquerda e os demais elementos aninhados à ele são postos na mesma linha que ele. Outro ponto, é que num display inline não conseguimos aplicar o margin auto. Assim como o text-align center não funciona num display block.

E também a diferença entre margin e padding. O margin é o espaço entre um elemento e seus vizinhos, enquanto o padding é o espaço entre o conteúdo do elemento e sua a borda. 

---
