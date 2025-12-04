import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import InfoPage from "./components/pages/InfoPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Sidebar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<InfoPage section="overview" />} />
            <Route path="/forces" element={<InfoPage section="forces" />} />
            <Route
              path="/principles"
              element={<InfoPage section="principles" />}
            />
            <Route path="/recap" element={<InfoPage section="recap" />} />
            <Route path="/game" element={<InfoPage section="game" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
