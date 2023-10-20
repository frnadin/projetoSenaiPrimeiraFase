
let participantes = []
let participantesCadastrados = []

for(var i=0;i!=100;i++){
  participantes.push("null")
  }

console.log(participantes.length)



function cadastro() {

  let indiceCadastro = Number(prompt("Escolha um numero de 0 a 99.")) 
 
  if(indiceCadastro<100){
    let nomeCadastrado = prompt("Digite o nome do participante que você quer cadastrar.")
    participantes[indiceCadastro]=nomeCadastrado
    console.log(participantes)
         alert("Cadastrado!")

        participantesCadastrados.unshift(nomeCadastrado)

        document.getElementById("br").innerHTML = participantesCadastrados.join("<br>")

}else{
  alert("Entrada invalida!")
}
  }

  function numSort(){
    let sorte = Number(prompt("Qual o numero sorteado?"))
    if(sorte<100){
    let sorteado = participantes[sorte] 
    return  document.getElementById("saida").innerHTML = "Pessoa sorteada: "+sorteado
    }else{
      alert("entrada invalida")
    }
  }
  
  function limpar(){  
  document.getElementById("saida").innerHTML = ""


  }


  
 