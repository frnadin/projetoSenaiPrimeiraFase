


let participantes = []

for(var i=0;i!=100;i++){
  participantes.push("null")
  
}
console.log(participantes.length)

function cadastro() {
  let indiceCadastro = Number(prompt("num de 0 a 100")) 
  let nomeCadastrado = prompt("Digite o nome do participante que vc quer cadastrar.")
  
  participantes[indiceCadastro]=nomeCadastrado
  console.log(participantes)
  }

  function numSort(){
    let sorte = Number(prompt("Qual o numero sorteado?"))
    let sorteado = participantes[sorte] 
    return alert(sorteado)
  }