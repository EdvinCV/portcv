import React from 'react';

// Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BottomNav from './components/BottomNav';


function App() {
  return (
    <Router>
      <div className="container">
        <SideBar />
        <BottomNav />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
        <div>
          <h2>Pa</h2>
        </div>
      </div>
    </Router>
  );
}

export default App;
