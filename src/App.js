import './App.css';
import Registration from './reg-window/Registration';
import { Route, Switch } from 'react-router';
import Logged from './Logged';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/logged" render={() => <Logged />} />
        <Route path="/" render={() => <Registration />} />
      </Switch>
    </div>
  );
}

export default App;
