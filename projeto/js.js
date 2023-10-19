
let participantes = []

for(var i=0;i!=100;i++){
  participantes.push("null")
  }

console.log(participantes.length)



function cadastro() {
  let indiceCadastro = Number(prompt("num de 0 a 99")) 
  if(indiceCadastro<100){
  let nomeCadastrado = prompt("Digite o nome do participante que vc quer cadastrar.")
  
  participantes[indiceCadastro]=nomeCadastrado
  console.log(participantes)
  alert("Cadastrado!")
}else{
  alert("Entrada invalida!")
}
  }

  function numSort(){//ARRUMAR  CASO SELECIONE MAIOR QUE 0100
    let sorte = Number(prompt("Qual o numero sorteado?"))
    if(sorte<100){
    let sorteado = participantes[sorte] 
    return  document.getElementById("saida").innerHTML = "Pessoa sorteada: "+sorteado
    }else{
      alert("entrada invalida")
    }
  }
  
  function limpar(){  
    return document.getElementById("saida").innerHTML = ""
  }
  
 