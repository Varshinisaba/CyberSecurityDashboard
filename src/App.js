// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Threats from './Threats';
import Vulnerabilities from './Vulnerabilities';
import Reports from './Reports';
import ChartComponent from './ChartComponent';  // Import the chart component

function App() {
  const [activeSection, setActiveSection] = useState('threats');

  return (
    <div className="App">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        {activeSection === 'threats' && <Threats />}
        {activeSection === 'vulnerabilities' && <Vulnerabilities />}
        {activeSection === 'reports' && <Reports />}
        {activeSection === 'chart' && <ChartComponent />}  {/* Render chart when needed */}
      </div>
    </div>
  );
}

export default App;
