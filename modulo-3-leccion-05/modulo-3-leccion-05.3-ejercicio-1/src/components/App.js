// Fichero src/components/App.js
import '../styles/App.css';
import { useEffect, useState } from 'react';
// Importamos el servicio del local storage
import ls from '../services/local-storage';

// Si consoleas ls verás que es el objeto con las 4 funciones que hemos exportado en el servicio
console.log(ls);

const App = () => {
  // Estados

  // Obtenemos el nombre del local storage
  // Si hay datos en el local storage esta función los devolverá
  // Si no hay datos en el local storage esta función devolverá el segundo parámetro, es decir, un string vacío
  const localStorageName = ls.get('name', '');
  // Usamos localStorageName como parámetro de useState porque queremos que al arrancar la página name tenga lo que había en el local storage
  const [name, setName] = useState(localStorageName);

  // Hacemos lo mismo con el email pero en una sola línea
  // Programarlo en una sola línea nos gusta más
  const [email, setEmail] = useState(ls.get('email', ''));

  const [tasks, setTasks] = useState(ls.get('tareas',[
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ] ));

  const [newTaskInput, setNewTaskInput] = useState(
    { 
      task: '', 
      completed: false 
    });
  // useEffect

  // Usamos useEffect para guardar los datos en el local storage
  // Cuando React renderice y pinte el HTML en la página ejecutará este useEffect
  useEffect(() => {
    // Guardamos el nombre, el email y las tareas en el local storage
    ls.set('name', name);
    ls.set('email', email);
    ls.set('tareas', tasks);

    // Este useEffect solo se ejecutará cuando cambie el nombre, el email o las tareas
    console.log('Ha cambiado el nombre o el email');
  }, [name, email, tasks]);

  // Eventos

  const handleName = ev => {
    setName(ev.target.value);
  };

  const handleEmail = ev => {
    setEmail(ev.target.value);
  };

  
  const renderTasksList = () =>{
    return tasks.map( (task, index) => {
      let listItem;
      if(task.completed){
        console.log(task.completed);
         listItem = 
         <li onClick={handleTask}       
         id={index} 
         key={index}>
           <div className="taskItem">
             <span className={`crossed  ${ task.completed ? 'true' : 'false'}`} >{task.task}</span>
             <button>Borrar</button>
           </div>
           </li>;
      }
      else {
         listItem = 
         <li onClick={handleTask} 
         id={index} 
         key={index}>
           <div className="taskItem">
           <span className={task.completed ? 'true' : 'false'} >{task.task}</span>
             <button>Borrar</button>
           </div>
           </li>;
      }
      return listItem;   
      
    })
  }

  const handleTask = (ev) => {
    const clickedId = ev.currentTarget.id;
    console.log(clickedId);
    //using clickedId as a position in the array of objects (since they match) the property 'completed' is accessed:
    // tasks[clickedId].completed is the same as saying tasks[position in the array].completed (in this case)
    tasks[clickedId].completed = ! tasks[clickedId].completed;
    setTasks([...tasks]);
  }

  const handleNewTask = (ev) => {
    setNewTaskInput({...newTaskInput, task: ev.currentTarget.value });
    console.log(ev.currentTarget.value);
    // setNewTaskInput({...newTaskInput, completed: false});
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  const handleAddTask = (ev) => {
    //When the button is clicked, the task the user just wrote will be added to the list of tasks
    setTasks([...tasks, newTaskInput]);
    //the state where the new task is added (newTaskInput)is emptied to prepare it for another one. For that is set to its default values again, like in the beggining: 
    setNewTaskInput({task: '', completed: false}); 
  }

  return (
    <div>
      <h1>Usando el local storage:</h1>

      <form className="form">
        <label htmlFor="name">Escribe tu nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Maricarmen"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="email">Escribe tu email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="mari.carmen@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </form>

      <h2>Tus datos son:</h2>
      <p>Tu nombre es: {name}</p>
      <p>Tu email es: {email}</p>
      <h2>Mi lista de tareas</h2>
      <ol>
        {renderTasksList()}
      </ol>
      <form className="form" onClick={handleSubmit}>
        <label htmlFor="newTask">Añade una tarea nueva a tu lista:</label>
          <input placeholder="Ej. Sacar a tu perrete" id="newTask" name="newTask" type="text" onChange={handleNewTask} value={newTaskInput.task} />     
        <button onClick={handleAddTask}>Crear nueva tarea</button>
      </form>
    </div>
  );
};

export default App;