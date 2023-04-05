function clicar() {
   let num = document.getElementById("txtn")
   let tab = document.getElementById("select")
   if (num.value.length == 0){
      alert('[UNDERFIND] Dados incompletos')
   } else {
    //guaradando o num digitado
      let n = Number(num.value)
      let c = 1
      tab.innerHTML = ''
      while (c <= 10) {
      //selecionando opções de um item
      let item = document.createElement('option') 
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
   }
  }

}