import './App.scss';

import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop"; 
import Home from "./Home";
import ItemDetail from "./ItemDetail.js";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {


  return (

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about" component={About}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path="/shop/:itemId" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
