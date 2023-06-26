
import './App.css';
import Dashboard from "./component/Dashboard"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Team from './component/Team';
import Movies from './component/Movies';
import Events from './component/Events';
import Tasks from './component/Tasks';
import Documentation from './component/Documentation';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/team' element={<Team/>}/>
          <Route exact path='/movies' element={<Movies/>}/>
          <Route exact path='/events' element={<Events/>}/>
          <Route exact path='/tasks' element={<Tasks/>}/>
          <Route exact path='/documentation' element={<Documentation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
