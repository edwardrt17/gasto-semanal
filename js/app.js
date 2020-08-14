// proyecto gasto semanal la idea con este proyecto es ir calculando un presupuesto y que el programa me valla avisando cuando el presupuesto este bajo y cuando este pasado del presupuesto para ello utilizaremos clases de EC6 sera asi:

// variables
// 1
// let presupuestoUsuario = prompt('Cual es tu presupuesto');
// const formulario = document.getElementById('agregar-gasto');
// let cantidadPresupuesto;

// clases

// class Presupuesto {

//     constructor(presupuesto) {
//         this.presupuesto = Number(presupuesto);
//         this.restante = Number(presupuesto);


//     }

//     restante(cantidad = 0) {
//         return this.restante -= number(cantidad);

//     }
// }
// esta clase me va a mostrar todo loque se agregue y guarde en el html
// class Interfaz {

//     insertarPresupuesto(cantidad) {
//         creo unos selectores para insertar la cantidad en los presupuesto y restante
//         const presupuestoSpam = document.querySelector('span#total');
//         const restanteSpam = document.querySelector('span#restante');

//         presupuestoSpam.innerHTML = `${cantidad}`;
//         restanteSpam.innerHTML = `${cantidad}`;


//     }

//     mensajeformulario(mensaje, tipo) {
//         let divMensaje = document.createElement('div');
//         divMensaje.classList.add('text-center', 'alert');
//         chequeando que se llene el formulario y me de mensaje de error si hay un problema y si no que continue
//         if (tipo === 'error') {
//             divMensaje.classList.add('alert-danger');

//         } else {
//             divMensaje.classList.add('alert-success');

//         }
//         creo elmensaje e inserto el mensaje en el html
//         divMensaje.appendChild(document.createTextNode(mensaje));
//         inserto en el DOM .lo insterto antes del formulario 
//         document.querySelector('.primario').insertBefore(divMensaje, formulario);
//         formulario.reset();



//         setTimeout(function() {

//             document.querySelector('.primario .alert').remove();


//         }, 3000)
//     }

//     imprimirmensaje(nombre,cantidad){



//     }

// }






// eventos


// document.addEventListener('DOMContentLoaded', function() {
//     creo una condicion para que no meinicie la aplicacion si no hay valores en el prompt

//     if (presupuestoUsuario === null || presupuestoUsuario === '') {

//         window.location.reload();
//     } else {
//         creo una instancia para mi class presupuesto y le paso el valor del prompt

//         cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

//         creo una instancia para mi interfaz y la paso el valor que ya he tomado de la cantidad del prompt
//         let UI = new Interfaz();
//         UI.insertarPresupuesto(cantidadPresupuesto.presupuesto);

//     }




// })

// formulario.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const nombreGasto = document.getElementById('gasto').value;
//     const nombreCantidad = document.getElementById('cantidad').value;

//     let UI = new Interfaz();

//     if (nombreGasto === '' || nombreCantidad === '') {


//         UI.mensajeformulario('Hubo un error ', 'error');

//     } else {


//         UI.mensajeformulario('Correcto', 'correcto');
//         UI.imprimirmensaje(nombreGasto, nombreCantidad);

//     }



// });