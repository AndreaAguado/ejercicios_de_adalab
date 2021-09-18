import '../styles/App.scss';
import {useState} from 'react';

function App() {
  const[state,setState] = useState('hidden');
  const handleMenu = (ev) => {
    ev.preventDefault();
    if(state === 'hidden'){
      setState('');
    }
    else{
      setState('hidden');
    }
  }

  const menuClasses = () => {
      let myClass = `menu ${state}`;
      return myClass;
  }
  return (
    <div>
      <header>
        <nav><a href="."><i onClick={handleMenu} className="fas fa-bars"></i></a></nav>
        <div className={menuClasses()}>
         <div className="menu__contents">
           <a href=".">Link 1</a>
           <a href=".">Link 2</a>
           <a href=".">Link 3</a>
         </div>
         <i onClick={handleMenu} className="far fa-times-circle menu__icon"></i>
        </div>
      </header>

    </div>
  );
}

export default App;
