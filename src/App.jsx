import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import ListPage from "./pages/list";

function App() {
  return (
    <div class="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
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
