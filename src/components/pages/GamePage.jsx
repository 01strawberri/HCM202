import { useState } from "react";

export default function GamePage() {
  const puzzles = [
    {
      title: "Câu hỏi 1",
      hint: "Từ khóa gợi nhớ 3 khối lực lượng mà Hồ Chí Minh nhấn mạnh (viết liền, không dấu).",
      keyword: "luctuong",
      explanation:
        "Ba lực lượng chủ yếu: phong trào cộng sản & công nhân quốc tế, phong trào giải phóng dân tộc và lực lượng yêu chuộng hòa bình – dân chủ.",
      // Để trống, bạn có thể chèn link hình sau
      image: "",
    },
    {
      title: "Câu hỏi 2",
      hint: "Nguyên tắc cốt lõi kết hợp 'lý' và 'tình' trong đoàn kết quốc tế (2 chữ, không dấu).",
      keyword: "clyctinh",
      explanation:
        "Đoàn kết phải 'có lý, có tình' – vừa đúng về đường lối, mục tiêu, lợi ích; vừa tôn trọng, chân thành với bạn bè quốc tế.",
      // Để trống, bạn có thể chèn link hình sau
      image: "",
    },
    {
      title: "Câu hỏi 3",
      hint: "Từ khóa nói lên quan điểm 'tu luc la goc, ngoai luc la tro luc' (2 chữ, không dấu).",
      keyword: "doclap",
      explanation:
        "Hồ Chí Minh nhấn mạnh độc lập, tự chủ: tự lực cánh sinh, dựa vào sức mình là chính; viện trợ chỉ là yếu tố hỗ trợ.",
      // Để trống, bạn có thể chèn link hình sau
      image: "",
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
                {puzzle.image && (
                  <img src={puzzle.image} alt={puzzle.title} />
                )}
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


