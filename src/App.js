import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Project1, Project2, Project3, Project4 } from './pages/Projets';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project1" component={Project1} />
      <Route exact path="/project2" component={Project2} />
      <Route exact path="/project3" component={Project3} />
      <Route exact path="/project4" component={Project4} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />

   
    </Switch>

  );
};

export default App;