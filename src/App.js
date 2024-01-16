import React from "react";
import './App.css';
import { HomeHero, HomeCode } from './components/Home';
import Bio from './components/Bio';
import Connect from './components/Connect';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeHero>
        </HomeHero>
      </header>
      <section className="App-Bio">
        <div className="blur">
          <Bio></Bio>          
        </div>
      </section>
      <section className="App-Connect">
        <Connect></Connect>
      </section>
      <section className="App-Projects">
        <div className="blur brighten">
          <Projects></Projects>
        </div>
      </section>
      <section className="App-Code">
        <div id="HomeCode">
          <HomeCode></HomeCode>
        </div>
      </section>
    </div>
  );
}

export default App;
