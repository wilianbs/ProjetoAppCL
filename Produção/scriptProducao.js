

function selecionar(){

   let btmProcesso = document.querySelector ("#condicao").value
   let valorProcesso = btmProcesso
   console.log (valorProcesso)
 
}
  
 



const linhaDeDados= [];

//Criando campo <span> JS
let d = document.querySelector('.dadosProd')
let lid = document.createElement ("span")


//Função adiciona e remove dados (botao +-)
function adicionarElementos() {
   
    linhaDeDados.push(Number(linhaDeDados.length+1))
    console.log(linhaDeDados)
    lid.appendChild(document.createTextNode(`${linhaDeDados}`))
    lid.style.boxShadow= 'inset 0px -6px 5px -2px  rgba(1, 255, 1, 0.5)'
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
 


