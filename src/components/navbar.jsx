import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
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
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-eyebrow">HCM202</span>

        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <h2 style={{ margin: 0 }}>Tư tưởng Hồ Chí Minh -</h2>
          <p style={{ margin: 0 }}>Đại đoàn kết toàn dân tộc và đoàn kết quốc tế</p>
        </div>
      </div>


      <nav className="navbar-nav">
        <button
          type="button"
          className="nav-link"
          onClick={() => scrollToSection("overview")}
        >
          Tổng quan nội dung
        </button>

        <button type="button" className="nav-link" onClick={handleGameClick}>
          Mini game
        </button>
      </nav>
    </header>
  );
}

