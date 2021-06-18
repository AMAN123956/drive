/* Global Css */
import './App.css';
/* Bootstrap */
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/* Register */
import Register from './components/Register/index'
import Login from './components/Login/index'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact><Register></Register></Route>
            <Route path='/login'><Login></Login></Route>
          </Switch>
        </Router>
      </div>
    </Router>
  );
}

export default App;
