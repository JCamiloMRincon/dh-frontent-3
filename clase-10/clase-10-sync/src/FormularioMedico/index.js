import styles from './styles.css';

function FormularioMedico(props) {
    return (
        <form onSubmit={props.onAgregarTurno}>
            <p>Ingrese el nombre <input type="text" name="nombre"/></p>
            <p>Ingrese el apellido <input type="text" name="apellido"/></p>
            <input type="submit" value="Agendar turno"/>
        </form>
    );
}

export default FormularioMedico;