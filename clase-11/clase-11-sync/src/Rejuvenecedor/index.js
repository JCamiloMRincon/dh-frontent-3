function Rejuvenecedor(props) {
    return (
        <form onSubmit={props.onAgregarPersona}>
            <p>Ingrese el nombre <input type="text" name="nombre"/></p>
            <p>Ingrese la edad <input type="text" name="edad"/></p>
            <input type="submit" value="Agendar persona"/>
        </form>
    );
}

export default Rejuvenecedor;