import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from "./components/Home";
import Detail from "./components/Detail";
import Actividades from './components/Actividades'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/home' component={Home}/>
          <Route exact path='/actividades' component={Actividades}/>
          <Route exact path='/home/:id' component={Detail}/>
        </Switch>
        {/* <h1>Henry Countries</h1> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
