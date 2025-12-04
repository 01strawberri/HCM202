import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-eyebrow">HCM202</span>
        <h2>Tư tưởng Hồ Chí Minh</h2>
        <p>Đoàn kết quốc tế</p>
      </div>

      <nav className="sidebar-nav">
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
          Mini game
        </NavLink>
      </nav>
    </aside>
  );
}
