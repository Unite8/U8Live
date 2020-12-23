import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import Project from './Project';
import Team from './Team';
import Patner from './Patner';
import Contact from './Contact';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Carrier from './Carrier';
import About from './About';
import apply from './Apply';

const App = () =>
{
  return(
      <>
         <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/project" component={Project}/>
          <Route path="/team" component={Team}/>
          <Route path="/patner" component={Patner}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/carrier" component={Carrier}/>
          <Route path="/about" component={About}/>
          <Route path="/apply" component={apply}/>
          <Redirect to="/"/>
         </Switch>
        <Footer/>
      </>
  )
}

export default App;
