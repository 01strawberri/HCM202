import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        padding: "1.5rem",
        background: "#fffdf8",
        borderRight: "1px solid #e5d9c7",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginTop: 0 }}>HCM202</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <NavLink to="/" className="nav-item">
          Tổng quan
        </NavLink>

        <NavLink to="/forces" className="nav-item">
          Lực lượng
        </NavLink>

        <NavLink to="/principles" className="nav-item">
          Nguyên tắc
        </NavLink>

        <NavLink to="/recap" className="nav-item">
          Recap
        </NavLink>

        <NavLink to="/game" className="nav-item">
          Trò chơi
        </NavLink>
      </nav>
    </aside>
  );
}
