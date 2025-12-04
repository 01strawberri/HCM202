import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import InfoPage from "./components/pages/InfoPage";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ flex: 1, padding: "2rem" }}>
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
