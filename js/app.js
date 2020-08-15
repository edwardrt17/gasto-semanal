// Creo las variables
let presupuestoUsuario = prompt('Cual es tu presupuesto');
let formulario = document.querySelector('#agregar-gasto');
let cantidadpresupuesto;




// Creo las Clases
// 2 TOMOS LO VALORES DEL PRESUPUESTO Y RESTANTE
class Presupuesto {
    constructor(presupuesto) {

        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);

    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= cantidad;
    }
}


// 3 ACA COLOCO LOS ELEMENTOS PARA MOSTRAR AL USUARIO
class Interfaz {

    // INSERTO LOS VALORES DEL PROMPT EN EL HTML 
    presupuestoCantidad(cantidad) {



            let spanPresupuesto = document.querySelector('span#total');
            let spanRestante = document.querySelector('span#restante');

            spanPresupuesto.innerHTML = `${cantidad}`;
            spanRestante.innerHTML = `${cantidad}`;




        }
        // CREO UN MENSAJE DE ERROR Y CORRECTO EN EL HTML
    mensajeInterfaz(mensaje, tipo) {

            let div = document.createElement('div');
            div.classList.add('text-center', 'alert');

            if (tipo == 'error') {
                div.classList.add('alert-danger');

            } else {
                div.classList.add('alert-success');

            }
            div.innerHTML = `

                 ${mensaje}

    `

            document.querySelector('.primario').insertBefore(div, formulario);

            setTimeout(function() {
                let error = document.querySelector('.alert').remove();


            }, 3000)

        }
        //  AGREGO LOS VALORES DE TOMADOS DEL "SUMIT" AL HTML DE LISTADO
    agregarListado(nombre, cantidad) {
        // ELEMENTO PADRE PARA INSERTAR EL HTML
        let listadoGastos = document.querySelector('#gastos ul');

        let li = document.createElement('li');
        li.className = 'List-group-item d-flex justify-content-between aling-items-center';

        li.innerHTML = `
        ${nombre} 
       <span class= "badge badge-primary badge-pill">$ ${cantidad} `;


        listadoGastos.appendChild(li);



    }
    presupuestoRestante(cantidad) {

        const restante = document.querySelector('span#restante');
        const PresupuestoRestanteUsuario = cantidadpresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${PresupuestoRestanteUsuario}`;
    }

}


// Creo los Event Listener

// 1 CREO UN EVENTO AL INICIO DE LA APP PARA QUE NO ABRA SI EL PROMPT ESTA VACIO
document.addEventListener('DOMContentLoaded', function() {

        if (presupuestoUsuario === null || presupuestoUsuario === '') {
            window.location.reload();


        } else {
            cantidadpresupuesto = new Presupuesto(presupuestoUsuario);
            const UI = new Interfaz();
            UI.presupuestoCantidad(presupuestoUsuario);
        }



    })
    // LEO LOS VALORES DE LOS CAMPOS Y AÑADO LA INTERFAZ DESDE ACA
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreGasto = document.querySelector('#gasto').value;
    const nombreCantidad = document.querySelector('#cantidad').value;
    // CREO UNA INTERFAZ AL USUARIO PARA MOSTRAR LOS VALORES 
    const UI = new Interfaz();

    if (nombreGasto === '' || nombreCantidad === '') {


        UI.mensajeInterfaz('Hubo un error', 'error');


    } else {


        UI.mensajeInterfaz('Correcto', 'correcto');
        UI.agregarListado(nombreGasto, nombreCantidad);
        UI.presupuestoRestante(nombreCantidad);




    }





})