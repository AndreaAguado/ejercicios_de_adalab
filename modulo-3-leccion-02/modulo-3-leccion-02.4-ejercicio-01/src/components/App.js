// Fichero src/components/App.js
// Importamos useState desde React porque lo vamos a necesitar más abajo
import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
  // Creamos la constante de estado email y la función para modificarla setEmail.
  // El valor inicial que va a tener email es un string vacío.
  const [email, setEmail] = useState('');

  // Creamos una función manejadora que se ejecutará cuando la usuaria cambie el input.
  const handleEmail = ev => {
    // Cogemos el valor del input.
    const inputValue = ev.target.value;
    // Ejecutamos la función setEmail para actualizar el valor del estado email.
    // Cuando ejecutamos la función setEmail, React guarda el valor del input en la constante email y re-renderiza la página.
    // Esta función no la hemos creado nosotras, nos la ha creado React al utilizar el useState.
    setEmail(inputValue);
  };




  // Creamos la constante de estado numberA y la función para modificarla setNumberA.
  // El valor inicial que va a tener numberA es 0.
  const [numberA, setNumberA] = useState(0);
  // Creamos la constante de estado numberB y la función para modificarla setNumberB.
  // El valor inicial que va a tener numberB también es 0.
  const [numberB, setNumberB] = useState(0);

  // Creamos una función manejadora que se ejecutará cuando la usuaria cambie el input del primer número.
  const handleNumberA = ev => {
    // Cogemos el valor del input del primer número.
    const inputValue = ev.target.value;
    // Ejecutamos la función setNumberA para actualizar el valor del estado numberA.
    // Cuando ejecutamos la función setNumberA, React guarda el valor del input en la constante numberA y re-renderiza la página.
    // Esta función no la hemos creado nosotras, nos la ha creado React al utilizar el useState.
    setNumberA(inputValue);
  };

  // Creamos una función manejadora que se ejecutará cuando la usuaria cambie el input del segundo número.
  const handleNumberB = ev => {
    // Hacemos lo mismo que en la función manejadora anterior, pero con setNumberB y en una sola línea.
    setNumberB(ev.target.value);
  };

  // Creamos la constante total con la suma de los dos números.
  // Esta línea de código es JS normal y corriente, no tiene nada que ver con React.
  const total = parseInt(numberA) + parseInt(numberB);


  // Retornamos todo el código HTML que queremos que React pinte en la página.
  return (
    <div>
      <h1>Generador de emails:</h1>
      <form>
        <label>
          Escribe un email:
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleEmail. */}
          <input className="form__input-text" type="email" name="name" onChange={handleEmail} />
        </label>
      </form>
      {/* En esta línea usamos la constante email para pintar el HTML. */}
      <p>Tu email es: {email}.</p>
      <p>
        {/* En esta línea usamos la constante email para pintar la propiedad href del link. */}
        {/* Estamos interpolando para conseguir que el valor de href sea algo como mailto:maria@gmail.com. */}
        {/* También estamos usando la constante email para pintar el texto del link. */}
        Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
      </p>

      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleNumberA */}
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleNumberB */}
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
      </form>
      <p>
        {/* En esta línea usamos las constantes numberA y numberB creadas con el estado de React para pintar el HTML. */}
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        {/* En esta línea usamos la constante total que hemos creado por nosotras para pintar el HTML. */}
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;