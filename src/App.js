import React from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrumPoker from './pages/tools/ScrumPoker';
import JsonBeautifier from './pages/tools/JsonBeautifier';
import SqlBeautifier from './pages/tools/SqlBeautifier';
import Content from './components/layout/Content';
import About from './pages/tools/About';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Sidebar />
          <div id="content">
            <div className="content">
              <div className="container-fluid">


                <Routes>
                  <Route path="/" element={<Content />} /> {/* Route for the homepage */}
                  <Route path="/tools/scrum-poker" element={<ScrumPoker />} />
                  <Route path="/tools/json-beautifier" element={<JsonBeautifier />} />
                  <Route path="/tools/sql-beautifier" element={<SqlBeautifier />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
