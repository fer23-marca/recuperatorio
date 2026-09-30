
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
  `;

  listaContactos.appendChild(contacto);

  contactoVacio.style.display = "none";

});
