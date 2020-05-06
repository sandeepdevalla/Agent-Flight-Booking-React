import React from 'react';
import './App.css';
import  Dashboard from './DashboardComponent/DashboardComponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Air India Flight Booking Services
      </header>
      <Dashboard />
      <footer className="App-footer">
        Thanks for visiting
      </footer>
    </div>
  );
}

export default App;
