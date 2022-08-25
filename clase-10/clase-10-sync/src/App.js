import FormularioMedico from './FormularioMedico';
// import FormularioNumeros from './FormularioNumeros';
// import ListadoResultados from './ListadoResultados';
import ListadoTurnos from './ListadoTurnos';
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  
  // EJERCICIO SINCRONICO

  /* const [operaciones, setOperacion] = useState([]);

  function sumar(event) {
    
    event.preventDefault();

    const valorUno = parseInt(event.target.valor1.value);
    const valorDos = parseInt(event.target.valor2.value);
    const suma = valorUno + valorDos;

    const nuevo = {
      resultado: suma,
      valor1: valorUno,
      valor2: valorDos
    }

    setOperacion([nuevo, ...operaciones]);

    event.target.valor1.value = "";
    event.target.valor2.value = "";
  }

  return (
    <div>
      <FormularioNumeros onSumar={sumar}/>
      <ListadoResultados resultados={operaciones}/>
    </div>
  ); */

  const [listTurnos, setListTurnos] = useState([]);
  const [turnoPaciente, setTurnoPaciente] = useState(1);

  function agregarTurno(event) {
    
    event.preventDefault();

    const nombrePaciente = event.target.nombre.value;
    const apellidoPaciente = event.target.apellido.value;

    const turnoNuevo = {
      turno: turnoPaciente,
      nombre: nombrePaciente,
      apellido: apellidoPaciente
    }

    setListTurnos([...listTurnos, turnoNuevo]);
    setTurnoPaciente(turnoPaciente + 1);

    event.target.nombre.value = "";
    event.target.apellido.value = "";

    Swal.fire(
      'Turno ' + turnoNuevo.turno.toString(), 
      'Paciente ' + turnoNuevo.nombre + ' ' + turnoNuevo.apellido + ' agendado', 
      'success'
    );    
  }

  return (
    <div>
      <FormularioMedico onAgregarTurno={agregarTurno}/>
      <ListadoTurnos listaTurnos={listTurnos}/>
    </div>
  );
}

export default App;
