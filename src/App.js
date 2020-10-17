import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2 style={{"marginTop":"50px"}}>
          SimonHunt.us 
        </h2>
        <h5>Schedule a 30 minute virtual or in person meeting</h5>
        <div className="calendly-inline-widget" data-url="https://calendly.com/firstorlandocr/simonhunt?hide_event_type_details=1" style={{"minWidth":"320px","height":"630px"}}></div>
      </header>
    </div>
  );
}

export default App;
