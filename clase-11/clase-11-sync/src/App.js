import Rejuvenecedor from './Rejuvenecedor';
import Swal from 'sweetalert2';

function App() {

    function agregarPersona(event) {
        
        event.preventDefault();

        const nombrePersona = event.target.nombre.value;
        const edadPersona = parseInt(event.target.edad.value);

        let alertTitle = '';
        let alertMessage = '';
        let alertType = '';

        if ((edadPersona <= 10 || isNaN(edadPersona)) && nombrePersona === '') {
            alertTitle = 'ERROR';
            alertMessage = 'La edad debe ser mayor a 10 y el nombre no puede ser vacío';
            alertType = 'error';
        } else if ((edadPersona <= 10 || isNaN(edadPersona)) && nombrePersona !== '') {
            alertTitle = 'WARN';
            alertMessage = 'La edad debe ser mayor a 10';
            alertType = 'warning';
        } else if (edadPersona > 10 && nombrePersona === '') {
            alertTitle = 'WARN';
            alertMessage = 'El nombre no puede ser vacío';
            alertType = 'warning';
        } else {
            
            const personaNueva = {
                nombre: nombrePersona,
                edadAnterior: edadPersona,
                nuevaEdad: edadPersona - 10,
            }

            alertTitle = 'OK';
            alertMessage = 'Hola ' + personaNueva.nombre + 
                            '. Tenías ' + (personaNueva.edadAnterior).toString() + ' años.' + 
                            ' Ahora tienes ' + (personaNueva.nuevaEdad).toString() + ' años.';
            alertType = 'success';
        }

        event.target.nombre.value = "";
        event.target.edad.value = "";

        Swal.fire(alertTitle, alertMessage, alertType);    
    }

    return (
        <div>
            <Rejuvenecedor onAgregarPersona={agregarPersona}/>
        </div>
    );
}

export default App;