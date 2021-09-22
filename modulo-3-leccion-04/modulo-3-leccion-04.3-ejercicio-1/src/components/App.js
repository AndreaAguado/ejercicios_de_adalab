import '../styles/App.css';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);

  const[searchValue, setSearchValue] = useState('');
  
  const renderTasksList = () =>{
    return tasks.map( (task, index) => {
      let listItem;
      if(task.completed){
        console.log(task.completed);
         listItem = 
         <li onClick={handleTask} 
         className={`crossed ${task.completed ? 'true' : 'false'}`} 
         id={index} 
         key={index} 
         >
           {task.task}
           </li>;
      }
      else {
         listItem = 
         <li onClick={handleTask} 
         className={task.completed ? 'true' : 'false'} 
         id={index} 
         key={index}>
           {task.task}
           </li>;
      }
      return listItem;   
      
    })
  }

  const renderFilteredTasks = () => {
    
  }

  const handleTask = (ev) => {
    const clickedId = ev.currentTarget.id;
    console.log(clickedId);
    //using clickedId as a position in the array of objects (since they match) the property 'completed' is accessed:
    // tasks[clickedId].completed is the same as saying tasks[position in the array].completed (in this case)
    tasks[clickedId].completed = ! tasks[clickedId].completed;
    setTasks([...tasks]);
  }

  const handleSearch= (ev) => {
    console.log(ev.currentTarget.value);
    setSearchValue(ev.currentTarget.value);  
  }

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <form action="">
        <input onChange={handleSearch} type="text" value={searchValue}/>
      </form>
      <ol>
        {renderTasksList()}
      </ol>
    </div>
  );
}

export default App;
