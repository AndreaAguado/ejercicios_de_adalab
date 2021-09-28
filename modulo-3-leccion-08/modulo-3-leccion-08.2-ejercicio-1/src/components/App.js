// Fichero src/components/App.js
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import FailPage from './FailPage';
import NavBar from './NavBar';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        <h1>Copia de Github</h1>
        <NavBar></NavBar>
        </Route>
        <Route exact path="/overview">
          <h2>Overview</h2>
          <NavBar></NavBar>
        </Route>
        <Route exact path="/repositories">
          <h2>Repositories</h2>
          <NavBar></NavBar>
        </Route>
        <Route exact path="/packages">
          <h2>Packages</h2>
          <NavBar></NavBar>
        </Route>
        <Route exact path="/people">
          <h2>People</h2>
          <NavBar></NavBar>
        </Route>
        <Route exact path="/projects">
          <h2>Projects</h2>
          <NavBar></NavBar>
        </Route>
        <Route exact path="/settings">
          <h2>Settings</h2>
          <NavBar></NavBar>
        </Route>
        <Route>
            <FailPage />
        </Route>
      </Switch>

    </div>
  );
};

export default App;