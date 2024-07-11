import {  BrowserRouter as Router, Route, NavLink, Routes}  from "react-router-dom";
import './App.css';
import ChartPage from "./components/ChartPage";

function App() {
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
        <main>
          <Routes>
            <Route path="/chart" element={<ChartPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
