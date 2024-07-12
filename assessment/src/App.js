import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from "react-router-dom";
import './App.css';
import { useState } from "react";
import ChartPage from "./components/ChartPage";
import FullscrnImg from "./images/expand.jpeg";
import compareImg from "./images/add.jpeg";

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  const [activeButton, setActiveButton] = useState('1d');

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <span className="value">63,179.71</span>
            <span className="currency"> USD</span>
          </h1>
          <p className="change">+2,161.42 (3.54%)</p>
        </header>
        <nav className="App-nav">
          <NavLink to="/summary">Summary</NavLink>
          <NavLink to="/chart">Chart</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/analysis">Analysis</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        <div className='btn-container'>
          <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "5rem", marginTop: "2rem" }}>
            <img src={FullscrnImg} style={{ height: "12px", width: "12px", marginTop: "5px" }} />
            <button className='fullScrn-btn' onClick={toggleFullScreen}>
              {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "1.5rem", marginTop: "2rem" }}>
            <img src={compareImg} style={{ height: "12px", width: "12px", marginTop: "5px" }} />
            <button className='fullScrn-btn' onClick={toggleFullScreen}>
              Compare
            </button>
          </div>
          <div className='days-select'>
            <button
              className={`days-btn ${activeButton === '1d' ? 'active' : ''}`}
              onClick={() => handleClick('1d')}
            >
              1d
            </button>
            <button
              className={`days-btn ${activeButton === '3d' ? 'active' : ''}`}
              onClick={() => handleClick('3d')}
            >
              3d
            </button>
            <button
              className={`days-btn ${activeButton === '1w' ? 'active' : ''}`}
              onClick={() => handleClick('1w')}
            >
              1w
            </button>
            <button
              className={`days-btn ${activeButton === '1m' ? 'active' : ''}`}
              onClick={() => handleClick('1m')}
            >
              1m
            </button>
            <button
              className={`days-btn ${activeButton === '6m' ? 'active' : ''}`}
              onClick={() => handleClick('6m')}
            >
              6m
            </button>
            <button
              className={`days-btn ${activeButton === '1y' ? 'active' : ''}`}
              onClick={() => handleClick('1y')}
            >
              1y
            </button>
            <button
              className={`days-btn ${activeButton === 'max' ? 'active' : ''}`}
              onClick={() => handleClick('max')}
            >
              max
            </button>
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/chart" />} />
            <Route path="/chart" element={<ChartPage isFullScreen={isFullScreen} toggleFullScreen={toggleFullScreen} />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
