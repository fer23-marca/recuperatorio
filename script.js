

const nombre = document.querySelector("#nombre"); 
const telefono = document.querySelector("#telefono"); 
const btnAgregar = document.querySelector("#btn-agregar"); 
const listaContactos = document.querySelector(".lista-contactos"); 
const contactoVacio = document.querySelector(".contacto-vacio"); 
const contador = document.querySelector("#contador span"); 
 
 
btnAgregar.addEventListener("click", function () { 
 
  if (nombre.value === "" || telefono.value === "") { 
    alert("Completa todos los campos"); 
    return; 
  } 
 
  const contacto = document.createElement("div"); 
 
  contacto.classList.add("contacto"); 
 
  contacto.innerHTML = ` 
    <strong>${nombre.value}</strong> 
    <span>${telefono.value}</span> 
    <button class="btn-eliminar">Eliminar</button> 
  `; 
 
  listaContactos.appendChild(contacto); 
 
  contactoVacio.style.display = "none"; 
 
  contador.textContent = listaContactos.children.length; 
 
 
  const btnEliminar = contacto.querySelector(".btn-eliminar"); 
 
  btnEliminar.addEventListener("click", function () { 
 
    contacto.remove(); 
 
    contador.textContent = listaContactos.children.length; 
 
    if (listaContactos.children.length === 0) { 
      contactoVacio.style.display = "block"; 
    } 
 
  }); 
 
}); 