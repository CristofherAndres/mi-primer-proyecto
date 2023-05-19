import React from "react";
import ReactDOM from "react-dom";

/* App es un componente */
const App = () => {
  console.log("Hola mundo desde el componente");
  const fecha = new Date();
  const num1 = 5;
  const num2 = 10;
  return (
    <div>
      <h1>Mi primnera App</h1>
      <h2>Hola Mundo</h2>
      <br />
      <h3>La fecha de hoy es: {fecha.toString()}</h3>
      <h3>
        La suma de {num1} más {num2} = {num1 + num2}{" "}
      </h3>
    </div>
  );
};

/* Componente saludo */
const Saludo = (props) => {
  return (
    <div>
      <h1>Hola {props.nombre} tienes {props.edad} años.</h1>
    </div>
  );
};

/* Conponente footer */
const Footer = () => {
  return(
    <div>
      <h1>Este es el footer</h1>
    </div>
  )
}

/* Componemte App2 */
const App2 = () => {
  const nombre1 = "Cristofher"
  const edad1 = 17  
  const nombre2 = "Pepito"
  const edad2 = 25
  return (
    <div>
      <h1>Bienvenido a nuestra página</h1>
      <Saludo nombre={nombre1} edad={edad1} />
      <Saludo nombre="Pepito" edad="25" />
      <Saludo />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App2 />, document.getElementById("root"));
