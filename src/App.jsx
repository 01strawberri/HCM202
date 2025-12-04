import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import InfoPage from "./components/pages/InfoPage";
import GamePage from "./components/pages/GamePage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Sidebar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
