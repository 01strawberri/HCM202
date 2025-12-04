import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // Nếu đang ở trang game, điều hướng về trang chính trước
    if (location.pathname !== "/") {
      navigate("/");
      // Đợi DOM render xong rồi mới scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        el && el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      const el = document.getElementById(id);
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGameClick = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-eyebrow">HCM202</span>
        <h2>Tư tưởng Hồ Chí Minh</h2>
        <p>Đoàn kết quốc tế</p>
      </div>

      <nav className="sidebar-nav">
        <button
          type="button"
          className="nav-item"
          onClick={() => scrollToSection("overview")}
        >
          Tổng quan
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => scrollToSection("forces")}
        >
          Lực lượng
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => scrollToSection("principles")}
        >
          Nguyên tắc
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => scrollToSection("recap")}
        >
          Recap
        </button>

        <button type="button" className="nav-item" onClick={handleGameClick}>
          Mini game
        </button>
      </nav>
    </aside>
  );
}
