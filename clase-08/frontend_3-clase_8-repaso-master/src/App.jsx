import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  // colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
  state = {
    colors : ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  }

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
  shuffle = () => {
    this.setState((prevState) => {
      
      let array = prevState.colors;
      let curId = array.length;

      while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
      }

      return {
        colors: array
      }

    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(
            color => <div key={color} className={color}>{color}</div>
          )
          }
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}
