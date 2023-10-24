let presupuesto=[];
let op = null
let indice = null

function agregar(){
  let gasto=document.getElementById("gasto").value
  let cantidad=document.getElementById("cantidad").value
  if(op===true ){
presupuesto[indice].gasto= document.getElementById("gasto").value
presupuesto[indice].cantidad = document.getElementById("cantidad").value
}
else{
let user={
    gasto:gasto,
    cantidad:cantidad,

}
presupuesto.push(user)
}
document.getElementById("gasto").value = "";
  document.getElementById("cantidad").value = "";
  console.log(presupuesto);
  document.getElementById("tabla").innerHTML = ""
  op = false
}

function validar() {

    if (document.getElementById("gasto").value == "") {
        document.getElementById("alert").textContent= "El nombre del gasto no debe estar vacio"
        setTimeout(() => {
          document.getElementById("alert").textContent = ""
        }, 2000);
        document.getElementById("gasto").focus();
        
      } else if (document.getElementById("cantidad").value == "") {
        document.getElementById("alert").textContent = "la cantidad no debe estar vacio"
        setTimeout(() => {
          document.getElementById("alert").textContent = ""
        }, 2000);
        document.getElementById("cantidad").focus();
      }
      else{
        agregar()
        tabla()
      }
}

function tabla() {
  let frag = document.createDocumentFragment()

  presupuesto.forEach((item) => {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
      let eliminar = document.createElement("button")
  
    eliminar.textContent = "❌"
    eliminar.addEventListener("click", ()=>{
     event.target.parentNode.parentNode.remove()
    })


    td1.textContent = item.gasto
    td2.textContent = item.cantidad
    td3. appendChild(eliminar)
      
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
   
    frag.appendChild(tr)
    document.getElementById("tabla").appendChild(frag)
  })
}
    
