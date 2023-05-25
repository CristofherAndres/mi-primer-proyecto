import React from "react";
import ReactDOM from "react-dom";

/* Ejercicio */

const App3 = () => {
  const curso = "Especialidad 1";
  const parte1 = "Horas unidad 1";
  const ejercicio1 = 10;
  const parte2 = "Horas unidad 2";
  const ejercicio2 = 7;
  const parte3 = "Horas unidad 3";
  const ejercicio3 = 14;

  return (
    <div>
      <Header curso={curso} />
      <Contenido
        parte1={parte1}
        ejercicio1={ejercicio1}
        parte2={parte2}
        ejercicio2={ejercicio2}
        parte3={parte3}
        ejercicio3={ejercicio3}
      />

    <Total ejercicio1={ejercicio1} ejercicio2={ejercicio2} ejercicio3={ejercicio3} />

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
      <Parte parte={props.parte1} ejercicio={props.ejercicio1}/>
      <Parte parte={props.parte2} ejercicio={props.ejercicio2}/>
      <Parte parte={props.parte3} ejercicio={props.ejercicio3}/>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Número de horas {props.ejercicio1 + props.ejercicio2 + props.ejercicio3}
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
}

ReactDOM.render(<App3 />, document.getElementById("root"));
