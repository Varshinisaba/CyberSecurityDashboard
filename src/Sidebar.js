// src/Sidebar.js

import React from 'react';

function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <button onClick={() => setActiveSection('threats')}>Threats</button>
      <button onClick={() => setActiveSection('vulnerabilities')}>Vulnerabilities</button>
      <button onClick={() => setActiveSection('reports')}>Reports</button>
    </div>
  );
}

export default Sidebar;



