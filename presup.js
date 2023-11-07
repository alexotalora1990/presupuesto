let saldoInicial = 0;
let saldoDisponible = saldoInicial;
let datos = [];
document.getElementById("ventanaGastos").style.display = "none";
function establecerPresupuesto() {
  saldoInicial = parseFloat(document.getElementById("presupuesto").value);
  if (saldoInicial === " " || isNaN(saldoInicial) || Number(saldoInicial) <= 0) {
    document.getElementById("alert").textContent = "debes asignar un presupuesto valido"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
    document.getElementById("presupuesto").focus();
  }
  else {
    saldoDisponible = saldoInicial;
    document.getElementById("mostrarPresupuesto").innerText = saldoInicial;
    document.getElementById("mostrarSaldo").innerText=saldoDisponible;
    document.getElementById("ventanaPresupuesto").style.display = "none";
    document.getElementById("ventanaGastos").style.display = "block";
  }
}
function agregarGastos(){
  saldoInicial = parseFloat(document.getElementById("presupuesto").value);
  let nombre =document.getElementById("nombre").value;
  let precio= parseFloat(document.getElementById("precio").value);

   if (precio<=saldoDisponible){
    datos.push({nombre:nombre,precio:precio});
    saldoDisponible-=precio;
    agregarTabla();
    
    
  }
  else if(nombre==""){
    document.getElementById("alert").textContent = "Debes asignar un nombre de gasto"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
    document.getElementById("nombre").focus();
  }
  else if(precio== " "|| isNaN(precio) || Number(precio)>saldoDisponible){
    document.getElementById("alert").textContent = "Error al asignar el precio "
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
    document.getElementById("precio").focus();
  }
  if(saldoDisponible<= saldoInicial*0.2){
  document.getElementById("saldo").style.backgroundColor = "#ff00007c";
  }
  else if(saldoDisponible>saldoInicial*0.2){
    document.getElementById("saldo").style.backgroundColor = "#00800067"; 
  }

  
}

function eliminarGasto(index, precio) {

  datos.splice(index, 1);
  saldoDisponible += precio;
  agregarTabla();
   if(saldoDisponible>saldoInicial*0.2){
    document.getElementById("saldo").style.backgroundColor = "#00800067"; 
  }
}

function agregarTabla() {
  let table = document.getElementById("tabla");
  table.innerHTML = `
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Eliminar</th>
    </tr>
  `;

  document.getElementById("mostrarSaldo").innerText = saldoDisponible;

 datos.forEach((elemento, index) => {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = elemento.nombre;
    cell2.innerHTML = `$${elemento.precio}`;
    cell3.innerHTML = `<button onclick="eliminarGasto(${index}, ${elemento.precio})">Eliminar</button>`;
  });

  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
}



    
