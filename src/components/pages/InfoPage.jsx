import { useState } from "react";

export default function InfoPage({ section }) {
  switch (section) {
    case "overview":
      return (
        <div>
          <header className="app-header">
            <div className="brand">
              <p className="eyebrow">HCM202</p>
              <div className="brand-main">
                <h1>Tư tưởng Hồ Chí Minh<br />Đoàn kết quốc tế</h1>
              </div>
            </div>
          </header>

          <section className="hero-lite">
            <div className="hero-copy">
              <h2>Cô đọng nhất về lực lượng và nguyên tắc đoàn kết quốc tế</h2>
              <p>
                Tinh thần “bốn phương vô sản đều là anh em” được Hồ Chí Minh
                cụ thể hóa qua các liên minh chiến lược và những nguyên tắc vừa
                kiên định mục tiêu, vừa đề cao độc lập tự chủ.
              </p>
              <div className="hero-stats">
                <div>
                  <span>03</span>
                  <p>Khối lực lượng cần quy tụ</p>
                </div>
                <div>
                  <span>04</span>
                  <p>Tầng mặt trận đoàn kết</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Nguyên tắc cốt lõi</p>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <p className="label">Ghi nhớ nhanh</p>
              <h3>Việt Nam ↔ Đông Dương ↔ Á - Phi ↔ Thế giới</h3>
              <p>
                Lộ trình mở rộng mặt trận đoàn kết theo tư tưởng Hồ Chí Minh.
              </p>
            </div>
          </section>
        </div>
      );

    case "forces":
      return (
        <section id="forces" className="module">
          <div className="module-head">
            <h2>Lực lượng &amp; hình thức tổ chức</h2>
            <p>
              Những đối tác chiến lược cần gắn kết và cách tổ chức linh hoạt
              nhưng có nguyên tắc.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Phong trào cộng sản &amp; công nhân quốc tế</h3>
              <ul>
                <li>
                  Đoàn kết giai cấp công nhân toàn thế giới bảo đảm thắng lợi
                  cho chủ nghĩa cộng sản.
                </li>
                <li>
                  Chống lại chủ nghĩa tư bản – lực lượng phản động quốc tế; cùng
                  nhau theo tinh thần “bốn phương vô sản đều là anh em”.
                </li>
                <li>
                  Liên kết giữa các đảng cộng sản xuất phát từ vai trò tiên
                  phong của công nhân trong thời đại mới.
                </li>
              </ul>
            </article>

            <article className="info-card">
              <h3>Phong trào giải phóng dân tộc</h3>
              <ul>
                <li>
                  Sớm cảnh báo mưu đồ chia rẽ của đế quốc; yêu cầu Quốc tế Cộng
                  sản kết nối các dân tộc thuộc địa.
                </li>
                <li>
                  Chủ trương hình thành “liên minh phương Đông” – một cánh của
                  cách mạng vô sản.
                </li>
                <li>
                  Tăng cường tiếp xúc giữa cách mạng thuộc địa và vô sản chính
                  quốc để chuẩn bị hợp tác thực chất.
                </li>
              </ul>
            </article>

            <article className="info-card">
              <h3>Lực lượng yêu chuộng hòa bình, dân chủ</h3>
              <ul>
                <li>
                  Tranh thủ nhân dân các nước đang xâm lược Việt Nam thông qua
                  phong trào chống chiến tranh.
                </li>
                <li>
                  Kết hợp mục tiêu độc lập dân tộc với hòa bình, công lý, bình
                  đẳng để chạm tới lương tri tiến bộ.
                </li>
                <li>
                  Sự đồng tình của trí thức, quần chúng quốc tế giúp Đảng vượt
                  qua khó khăn và giành thắng lợi.
                </li>
              </ul>
            </article>
          </div>

          <div className="focus-panel">
            <div>
              <h3>Hình thức tổ chức</h3>
              <p>
                Các sáng kiến tiêu biểu thể hiện tư duy chiến lược của Hồ Chí
                Minh.
              </p>
              <ul>
                <li>
                  1924: đề xuất “Mặt trận thống nhất của nhân dân chính quốc và
                  thuộc địa” chống đế quốc.
                </li>
                <li>
                  1941: thành lập Việt Minh, hỗ trợ Lào và Campuchia xây dựng
                  mặt trận yêu nước.
                </li>
                <li>
                  Trong kháng chiến: dựng Mặt trận nhân dân ba nước Đông Dương;
                  mở rộng sang Á - Phi và mặt trận nhân dân thế giới.
                </li>
                <li>
                  Duy trì liên kết mật thiết với Trung Quốc, các dân tộc Á - Phi
                  và lực lượng đồng minh chống phát xít.
                </li>
              </ul>
            </div>
            <div className="timeline">
              <h4>Dòng thời gian tóm gọn</h4>
              <ul>
                <li>
                  <strong>1924</strong> · Kiến nghị mặt trận thống nhất chính
                  quốc - thuộc địa.
                </li>
                <li>
                  <strong>1941</strong> · Việt Minh ra đời, khơi dậy sức mạnh tự
                  quyết.
                </li>
                <li>
                  <strong>Kháng chiến</strong> · Hình thành mặt trận nhân dân
                  Đông Dương, Á - Phi.
                </li>
                <li>
                  <strong>Kháng chiến chống Mỹ</strong> · Mặt trận nhân dân thế
                  giới đoàn kết với Việt Nam.
                </li>
              </ul>
            </div>
          </div>
        </section>
      );

    case "principles":
      return (
        <section id="principles" className="module">
          <div className="module-head">
            <h2>Nguyên tắc đoàn kết quốc tế</h2>
            <p>
              Đoàn kết phải đi kèm nền tảng tư tưởng và bản lĩnh tự chủ để tránh
              biến thành thủ đoạn nhất thời.
            </p>
          </div>

          <div className="split-grid">
            <article className="principle-card">
              <p className="label">a. Có lý · có tình</p>
              <h3>Thống nhất mục tiêu và lợi ích</h3>
              <ul>
                <li>
                  Đặt cách mạng Việt Nam trong bối cảnh chung của thời đại, gắn
                  lợi ích dân tộc với trào lưu cách mạng thế giới.
                </li>
                <li>
                  Kiên định ngọn cờ độc lập dân tộc gắn với chủ nghĩa xã hội;
                  đoàn kết trên nền tảng chủ nghĩa Mác - Lênin và quốc tế vô
                  sản.
                </li>
                <li>
                  Tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ của mọi quốc
                  gia; chủ trương “làm bạn với tất cả các nước dân chủ” (1947).
                </li>
                <li>
                  Giương cao ngọn cờ hòa bình, đấu tranh chống chiến tranh xâm
                  lược vì một nền hòa bình chân chính đặt trên công bằng và lý
                  tưởng dân chủ.
                </li>
              </ul>
            </article>

            <article className="principle-card">
              <p className="label">b. Độc lập · tự chủ</p>
              <h3>Tự lực là gốc, ngoại lực là trợ lực</h3>
              <ul>
                <li>
                  Đoàn kết quốc tế nhằm gia tăng nội lực, nhưng nội lực mới là
                  yếu tố quyết định; “Tự lực cánh sinh, dựa vào sức mình là
                  chính”.
                </li>
                <li>
                  “Muốn người ta giúp cho, thì trước mình phải tự giúp lấy
                  mình” – chỉ tranh thủ viện trợ khi đã có thực lực.
                </li>
                <li>
                  Trong ngoại giao: “Thực lực là cái chiêng, ngoại giao là cái
                  tiếng”; phải có đường lối độc lập, tự chủ, đúng đắn.
                </li>
                <li>
                  Các Đảng dù lớn hay nhỏ đều bình đẳng, đoàn kết giúp đỡ lẫn
                  nhau; kết hợp hài hòa lợi ích dân tộc và lợi ích quốc tế trong
                  hai cuộc kháng chiến.
                </li>
              </ul>
            </article>
          </div>
        </section>
      );

    case "recap":
      return (
        <section id="extras" className="module">
          <div className="module-head">
            <h2>Recap nhanh</h2>
            <p>Một vài ghi chú giúp ôn tập và liên hệ thực tiễn.</p>
          </div>
          <div className="recap-grid">
            <article>
              <h3>Ví dụ tiêu biểu</h3>
              <ul>
                <li>Hội nghị quốc tế ủng hộ Việt Nam tại Stockholm (1967).</li>
                <li>
                  Trí thức Pháp và phong trào phản chiến Mỹ đứng về phía Việt
                  Nam.
                </li>
                <li>
                  Liên minh Á - Phi đoàn kết với Việt Nam chống đế quốc xâm
                  lược.
                </li>
              </ul>
            </article>
            <article>
              <h3>Mindset áp dụng</h3>
              <ul>
                <li>
                  Đặt lợi ích dân tộc trong mạng lưới lợi ích chung nhân loại.
                </li>
                <li>Tự chủ nội lực, mở cửa hợp tác để nhân đôi sức mạnh.</li>
                <li>Độc lập nhưng không tách rời trách nhiệm quốc tế.</li>
              </ul>
            </article>
            <article>
              <h3>Checklist ghi nhớ</h3>
              <ul>
                <li>Xác định đúng đồng minh chiến lược.</li>
                <li>Giữ nguyên tắc nhưng linh hoạt về hình thức mặt trận.</li>
                <li>
                  Kết hợp hòa bình - công lý - độc lập trong mọi thông điệp.
                </li>
              </ul>
            </article>
          </div>
        </section>
      );

    case "game":
      return (
        <MiniGame />
      );

    default:
      return <h1>Trang không tồn tại</h1>;
  }
}

function MiniGame() {
  const puzzles = [
    {
      title: "Câu hỏi 1",
      hint: "Từ khóa gợi nhớ 3 khối lực lượng mà Hồ Chí Minh nhấn mạnh (viết liền, không dấu).",
      keyword: "luctuong",
      explanation:
        "Ba lực lượng chủ yếu: phong trào cộng sản & công nhân quốc tế, phong trào giải phóng dân tộc và lực lượng yêu chuộng hòa bình – dân chủ.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Câu hỏi 2",
      hint: "Nguyên tắc cốt lõi kết hợp 'lý' và 'tình' trong đoàn kết quốc tế (2 chữ, không dấu).",
      keyword: "clyctinh",
      explanation:
        "Đoàn kết phải 'có lý, có tình' – vừa đúng về đường lối, mục tiêu, lợi ích; vừa tôn trọng, chân thành với bạn bè quốc tế.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Câu hỏi 3",
      hint: "Từ khóa nói lên quan điểm 'tu luc la goc, ngoai luc la tro luc' (2 chữ, không dấu).",
      keyword: "doclap",
      explanation:
        "Hồ Chí Minh nhấn mạnh độc lập, tự chủ: tự lực cánh sinh, dựa vào sức mình là chính; viện trợ chỉ là yếu tố hỗ trợ.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [states, setStates] = useState(
    puzzles.map((_, index) => ({
      answer: "",
      unlocked: index === 0,
      solved: false,
      feedback: "",
      isError: false,
    }))
  );

  const solvedCount = states.filter((p) => p.solved).length;
  const percent = Math.round((solvedCount / puzzles.length) * 100);

  const handleChange = (idx, value) => {
    setStates((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, answer: value, feedback: "", isError: false } : p
      )
    );
  };

  const handleSubmit = (idx) => {
    setStates((prev) => {
      const current = prev[idx];
      if (!current.unlocked || current.solved) return prev;

      const normalized = current.answer.trim().toLowerCase();
      const correct = puzzles[idx].keyword.toLowerCase();

      if (!correct) {
        return prev.map((p, i) =>
          i === idx
            ? {
                ...p,
                feedback:
                  "Vui lòng cập nhật từ khóa đúng trong cấu hình mini game.",
                isError: true,
              }
            : p
        );
      }

      if (normalized === correct) {
        return prev.map((p, i) => {
          if (i === idx) {
            return {
              ...p,
              solved: true,
              feedback: "✔ Chính xác",
              isError: false,
            };
          }
          if (i === idx + 1) {
            return { ...p, unlocked: true };
          }
          return p;
        });
      }

      return prev.map((p, i) =>
        i === idx
          ? {
              ...p,
              feedback: "❌ Sai rồi, thử lại",
              isError: true,
            }
          : p
      );
    });
  };

  return (
    <section id="game-zone" className="module game">
      <div className="module-head">
        <h2>Trò chơi giải mật mã</h2>
        <p>Nhập đúng từ khóa để mở khóa từng câu hỏi và xem lời giải thích.</p>
      </div>

      <div id="game-progress">
        <div className="progress-bar">
          <span
            id="progress-fill"
            style={{ width: `${percent}%` }}
          ></span>
        </div>
        <p id="progress-text">{percent}% hoàn thành</p>
      </div>

      <div id="puzzle-container">
        {puzzles.map((puzzle, index) => {
          const state = states[index];
          const puzzleClass = [
            "puzzle",
            state.unlocked ? "unlocked" : "locked",
            state.solved ? "solved" : "",
            state.isError ? "shake" : "",
          ]
            .filter(Boolean)
            .join(" ");

          const disabled = !state.unlocked || state.solved;

          return (
            <div className={puzzleClass} data-index={index} key={index}>
              <div className="puzzle-header">
                <img src={puzzle.image} alt={puzzle.title} />
                <div>
                  <h3>{puzzle.title}</h3>
                  <p className="hint">{puzzle.hint}</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="Nhập từ khóa (không dấu, viết liền)..."
                className="answer-input"
                value={state.answer}
                disabled={disabled}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <button
                className="submit-btn"
                disabled={disabled}
                onClick={() => handleSubmit(index)}
              >
                Xác nhận
              </button>
              <p
                className={
                  "feedback " + (state.isError ? "error" : state.solved ? "success" : "")
                }
              >
                {state.feedback}
              </p>
              {state.solved && (
                <div className="explanation">
                  <p>{puzzle.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
