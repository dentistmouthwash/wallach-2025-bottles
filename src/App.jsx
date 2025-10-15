import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import BottlePage from "./pages/bottles";

function App() {
  return (
    <div class="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/bottles" element={<BottlePage />} />
          <Route path="/location" element={< MapPage />} />
        </Routes>
      </main>
      <div class="bottom-nav">
        <Link to="/">HOME</Link>
        <Link to="/list">LIST</Link>
        <div>MENU3</div>
      </div>
    </div>
  );
}

export default App;
