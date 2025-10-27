import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import BottlePage from "./pages/bottles";
import MapPage from "./pages/location";

function App() {
  return (
    <div className="App">
      {/* Top Navigation Header */}
      <header className="top-nav">
        <div className="nav-brand">
          <span className="recycle-icon">♻️</span>
          <span className="brand-text">BottleCycle</span>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/bottles" element={<BottlePage />} />
          <Route path="/location" element={<MapPage />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <Link to="/" className="bottom-nav-item">
          <span className="bottom-nav-icon">🏠</span>
          <span className="bottom-nav-text">Home</span>
        </Link>
        <Link to="/bottles" className="bottom-nav-item">
          <span className="bottom-nav-icon">🫙</span>
          <span className="bottom-nav-text">Bottles</span>
        </Link>
        <Link to="/list" className="bottom-nav-item">
          <span className="bottom-nav-icon">📋</span>
          <span className="bottom-nav-text">List</span>
        </Link>
        <Link to="/location" className="bottom-nav-item">
          <span className="bottom-nav-icon">📍</span>
          <span className="bottom-nav-text">Locations</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
