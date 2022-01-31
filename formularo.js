const $cargarDatos = document.querySelector('#cargar-datos');

$cargarDatos.onclick = function (){
    const primerNombre = document.querySelector('#primer-nombre-usuario');
    const segundoNombre = document.querySelector('#segundo-nombre-usuario');
    const apellidoUsuario = document.querySelector('#apellido-usuario');
    const edadUsuario = document.querySelector('#edad-usuario');
    const vienvenidaTitulo = document.querySelector('h1');
    const principal = document.querySelector('body');

    vienvenidaTitulo.textContent = "¡hola! " + primerNombre.value;

   const divDePagina = document.createElement('div');
   const parrafoEnDiv = document.createElement('p');
   //const parrafoEnDivDos = document.createElement('p');
   const contenidoParrafo = document.createTextNode( "primer nombre: " + primerNombre.value + " segundo nombre: " + segundoNombre.value + 
   " apellido: " + apellidoUsuario.value + " edad: " + edadUsuario.value);
   //const contenidoParrafoDos = document.createTextNode ()

   parrafoEnDiv.appendChild(contenidoParrafo);
   divDePagina.appendChild(parrafoEnDiv);
   principal.appendChild(divDePagina);


    console.log("hola")
    return false
}