import '../styles/App.css';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ];
  const renderTasksList = () =>{
    return tasks.map( (task, index) => {
      let listItem;
      if(task.completed){
        console.log(task.completed);
         listItem = <li className="crossed"  key={index}>{task.task}</li>;
      }
      else {
         listItem = <li key={index}>{task.task}</li>;
      }
      return listItem;   
      
    })
  }
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasksList()}
      </ol>
    </div>
  );
}

export default App;
