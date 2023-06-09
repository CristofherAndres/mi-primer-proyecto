import React from "react";
import ReactDOM from "react-dom";

/* Ejercicio */

const App3 = () => {
  const curso = "Especialidad 1";
  const partes = [
    {
      nombre: "Horas unidad 1",
      ejercicio: 10,
    },
    {
      nombre: "Horas unidad 2",
      ejercicio: 7,
    },
    {
      nombre: "Horas unidad 3",
      ejercicio: 14,
    },
  ];

  return (
    <div>
      <Header curso={curso} />
      <Contenido partes={partes} />
      <Total partes={partes}/> 
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.curso}</h1>
    </div>
  );
};

const Contenido = (props) => {
  return (
    <div>
      {props.partes.map((valor,index) =>
        <Parte parte={valor.nombre} ejercicio={valor.ejercicio} key={index}/>
      )}
    </div>
  );
};

const Total = (props) => {
  let suma = 0;
  props.partes.forEach((valor) => {
    suma += valor.ejercicio
  } )
  return (
    <div>
      <p>
        Número de horas {suma}
      </p>
    </div>
  );
};

const Parte = (props) => {
  return (
    <div>
      <p>
        {props.parte} {props.ejercicio}
      </p>
    </div>
  );
};

ReactDOM.render(<App3 />, document.getElementById("root"));
