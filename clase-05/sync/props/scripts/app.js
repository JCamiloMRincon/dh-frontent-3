class Carro {

    constructor(marca, modelo, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }

    mostrarCarro() {
        document.body.innerHTML += `
            <h2>${this.marca}</h2>
            <h3>${this.modelo}</h3>
            <h4>${this.puertas}</h4>
        `; 
    }

}

let carro1 = new Carro("Ford", "Mustang", "4 puertas");
let carro2 = new Carro("Renault", "Logan", "4 puertas");

carro1.mostrarCarro();
carro2.mostrarCarro();