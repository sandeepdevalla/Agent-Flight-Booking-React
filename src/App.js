import React from 'react';
import './App.css';
import  Dashboard from './DashboardComponent/DashboardComponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
         Welcome to Air India Flight Booking Services
        <div>
        <marquee>For Emergency You Can Call to Toll Free No 1800-425-428 </marquee>
        </div>

      </header>
      <Dashboard />
      <footer className="App-footer">
        Thanks for visiting
      </footer>
    </div>
  );
}

export default App;
