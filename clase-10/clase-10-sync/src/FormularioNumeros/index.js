function FormularioNumeros(props) {
    return (
        <form onSubmit={props.onSumar}>
            <p>Ingrese el primer valor <input type="text" name="valor1"/></p>
            <p>Ingrese el segundo valor <input type="text" name="valor2"/></p>
            <input type="submit" value="Sumar"/>
        </form>
    );
}

export default FormularioNumeros;