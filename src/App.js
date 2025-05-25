import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;