

const linhaDeDados= [];

//inserindo dados no campo <span>
let d = document.querySelector('.dadosProd')
let lid = document.createElement ("span")


//Função adiciona e remove dados (botao +-)
function adicionarElementos() {
   
    linhaDeDados.push(Number(linhaDeDados.length+1))
    console.log(linhaDeDados)
    lid.appendChild(document.createTextNode(`${linhaDeDados}`))
    d.appendChild(lid)
    lid.innerHTML= (`${linhaDeDados}`)
    
    
}
function retirarElementos(){

    linhaDeDados.pop(Number(linhaDeDados.length-1))
console.log(linhaDeDados)
    lid.appendChild(document.createTextNode(`${linhaDeDados}`))
    d.appendChild(lid)
    lid.innerHTML= (`${linhaDeDados}`)

}
 


