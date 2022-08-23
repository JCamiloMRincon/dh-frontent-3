function ListadoTurnos(props) {

    return (
        <ul>
            {props.listaTurnos.map((element, id) =>
                <li key={id + 1}>Se agendó el turno {id + 1} para el paciente {element.apellido} {element.nombre}</li>)
            }
        </ul>
    );

}

export default ListadoTurnos;