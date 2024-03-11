var setaEsquerda = window.document.getElementById("setaEsquerda")
var comentario1 = window.document.getElementById("comentario1") 
var comentario2 = window.document.getElementById("comentario2")
var comentario3 = window.document.getElementById("comentario3")
var setaDireita = window.document.getElementById("setaDireita")


function rolarParaDireita() {
    comentario1.style = "display:none"
    comentario3.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 35%"
}

function rolarParaEsquerda() {
    comentario1.style = "display: flex"
    comentario3.style = "display: none"
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: none"
}