/* Global Css */
import './App.css';
/* Bootstrap */
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/* Register */
import Register from './components/Register/index'
/* Login */
import Login from './components/Login/index'
/* Home Page */
import Home from './components/Home/index'
/* Drive Page */
import Drive from './components/Drive/index'

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact><Register></Register></Route>
            <Route path='/login'><Login></Login></Route>
            <Route path='/home'><Home /></Route>
            <Route path='/drive'><Drive /></Route>
          </Switch>
        </Router>
      </div>
    </Router>
  );
}

export default App;
