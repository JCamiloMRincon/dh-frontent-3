function ListadoTurnos(props) {

    return (
        <ul>
            {props.listaTurnos.map((element) =>
                <li key={element.turno}>
                    Se agendó el turno {element.turno} para el paciente {element.apellido} {element.nombre}
                </li>)
            }
        </ul>
    );

}

export default ListadoTurnos;