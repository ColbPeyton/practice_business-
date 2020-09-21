import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Page404 from './components/Page404';
import Footer from './components/Footer';

import './styles/App.scss';


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  // Header will change based on size of screen, detect change in width
  useEffect(()=>{
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);

  })

  function updateWidth(){
      setWidth(window.innerWidth);
  }

  const routes = [
    <NavLink className='nav' activeClassName="selected" to="/">Home</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/about">About</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/services">Services</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/contact">Contact</NavLink>
  ]
  return (
    <div className="App">
      <Router >
      <Header routes={routes} width={width}/>
              <Switch>
                <Route component={About} path="/about" />
                <Route component={Services} path="/services" />
                <Route component={Contact} path="/contact" />
                <Route exact component={Home} path="/" />
                <Route component={Page404} />
              </Switch>
      </Router>
      <Footer width={width}/>
    </div>
  );
}

export default App;
