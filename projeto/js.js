
let participantes = []
let participantesCadastrados = []
let numCadastrados = []

for(var i=0;i!=100;i++){
  participantes.push("null")
  }

console.log(participantes.length)



function cadastro() {

  let indiceCadastro = Number(prompt("Escolha um numero de 0 a 99.")) 
 
  if(indiceCadastro<100 & indiceCadastro>0){
    let nomeCadastrado = prompt("Digite o nome do participante que você quer cadastrar.")

    if(participantes[indiceCadastro]=="null"){

    participantes[indiceCadastro]=nomeCadastrado
    console.log(participantes)
         alert("Cadastrado!")

        participantesCadastrados.unshift(String(indiceCadastro + " | "+nomeCadastrado))

        document.getElementById("br").innerHTML = participantesCadastrados.join("<br>")
      
        document.getElementById("brEsquerdo").innerHTML = participantesCadastrados.join("<br>")            
    }else{alert("numero já ocupado")}
}else{
  alert("Entrada invalida!")
}
  }

  function numSort(){
    let sorte = Number(prompt("Qual o numero sorteado?"))
    if(sorte<100 & participantes[sorte]!="null"){
    let sorteado = participantes[sorte] 
      document.getElementById("saida").innerHTML = "Pessoa sorteada: "+sorteado +"<br>"+"Numero sorteado: "+sorte
      

    document.getElementById('aaa').style.visibility = 'visible'


    }else{
      alert("entrada invalida")
    }
  }
  
  function limpar(){  
 
  window.location.reload(true);

  }


  
 