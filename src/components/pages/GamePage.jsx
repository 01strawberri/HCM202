import { useState } from "react";
import "./InfoPage.css";
import "./GamePage.css";

export default function GamePage() {
  const [showHelp, setShowHelp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const puzzles = [
    {
      title: "Câu hỏi 1",
      hint: (
        <>
          Từ Đông sang Tây, từ Nam lên Bắc, nhớ lời Bác dạy: “Đoàn kết, đoàn
          kết, đại đoàn kết – Thành công, thành công, đại thành công.”
        </>
      ),
      suggestion:
        "Gợi ý: Dựa vào các hướng Đông, Tây, Nam, Bắc để giải mã mật thư. Từ khóa đại diện cho nguyên tắc cơ bản trong tư tưởng Hồ Chí Minh về quan hệ quốc tế.",

      keyword: "HỢP TÁC SONG PHƯƠNG",
      explanation: (
        <>
          <b>Hợp tác song phương</b> là hình thức hợp tác giữa{" "}
          <b>hai quốc gia</b> dựa trên nguyên tắc tôn trọng, bình đẳng và cùng
          có lợi. Trong tư tưởng Hồ Chí Minh, hợp tác song phương là một phần
          của đường lối ngoại giao hòa bình, linh hoạt, nhằm mở rộng quan hệ
          quốc tế và tăng cường đoàn kết với các nước bạn.
        </>
      ),
      image: "/images/game1.jpg",
    },
    {
      title: "Câu hỏi 2",
      hint: (
        <>
          <br /> -21 32 -22 -22 11 -11 32 11 43 -14 -24
          <br /> -34 -41 11 12 -24 -32 -22 -22 11 -41
        </>
      ),
      suggestion:
        "Gợi ý: Dựa theo tọa độ Oxy, lấy hàng ngang làm trục X và hàng dọc làm trục Y để giải mã.",

      keyword: "LIÊN MINH TỰ NGUYỆN",
      explanation: (
        <>
          <b>LIÊN MINH TỰ NGUYỆN</b> trong tư tưởng Hồ Chí Minh phải dựa trên
          tinh thần tự nguyện, bình đẳng, tôn trọng lẫn nhau. Chỉ có tự nguyện
          mới tạo được đoàn kết bền vững và lâu dài.
        </>
      ),
      image: "/images/game2.jpg",
    },
    {
      title: "Câu hỏi 3",
      hint: "“Cơn mưa đỏ lan khắp bầu trời, hạt nào cũng hướng về lý tưởng chung.”",
      suggestion:
        "Gợi ý: Đây là mật thư MƯA RÀO. Từ khóa đại diện cho lực lượng quốc tế đứng lên chống áp bức, cùng hướng về lý tưởng chung – hỗ trợ cách mạng Việt Nam.",

      keyword: "PHONG TRÀO CỘNG SẢN QUỐC TẾ",
      explanation: (
        <>
          Như hành trình của các dân tộc không bao giờ đi theo một đường thẳng,
          thông điệp này cũng nghiêng theo một hướng khác. Hãy tìm trong những
          đường xiên ấy.
        </>
      ),
      image: "/images/game3.jpg",
    },
    {
      title: "Câu hỏi 4",
      hint: "BÁC HỒ “Người mở đường cho hình của nước”",
      suggestion:
        "Gợi ý: Đây là mật thư CAM RANH, sau khi lập được bảng thì tìm từ khóa theo hình chữ S của đất nước Việt Nam.",

      keyword: "TÔN TRỌNG ĐỘC LẬP",
      explanation: (
        <>
          <b>Tôn trọng độc lập</b> trong tư tưởng Hồ Chí Minh là nguyên tắc đặt
          quyền tự quyết, chủ quyền và độc lập của mỗi dân tộc lên hàng đầu, bảo
          đảm quan hệ bình đẳng và hữu nghị quốc tế.
        </>
      ),
      image: "/images/game4.jpg",
    },
    {
      title: "Câu hỏi 5",
      hint: "Vượt đồi xuống suối, tiến đến ngày hòa bình",
      suggestion:
        "Gợi ý: “Hãy tìm đường đi của con sóng: Các chữ cái nằm trên nhịp sóng sẽ ghép thành lời giải.",

      keyword: "LỰC LƯỢNG HÒA BÌNH",
      explanation: (
        <>
          <b>Lực lượng hòa bình</b> trong tư tưởng Hồ Chí Minh là các lực lượng
          tiến bộ, yêu chuộng hòa bình, dân chủ và công lý trên toàn thế giới,
          luôn ủng hộ Việt Nam trong các cuộc đấu tranh chính nghĩa.
        </>
      ),
      image: "/images/game5.jpg",
    },
    {
      title: "Câu hỏi 6",
      hint: "Hôm nay biển tĩnh không gió – nhưng lòng người trào cảm xúc",
      suggestion: "Gợi ý: Biển tĩnh không SÓNG không GIÓ",

      keyword: "GIẢI PHÓNG DÂN TỘC",
      explanation: (
        <>
          <b>Giải phóng dân tộc</b> trong tư tưởng Hồ Chí Minh là lực lượng các
          dân tộc thuộc địa đấu tranh chống thực dân, đế quốc, cùng mục tiêu bảo
          vệ độc lập, tạo sức mạnh liên minh hỗ trợ cách mạng Việt Nam.
        </>
      ),
      image: "/images/game6.jpg",
    },
    {
      title: "Câu hỏi 7",
      hint: "Ghép tà ghép vẹt mở đường hành quân",
      suggestion:
        "Gợi ý: Mật thư tà vẹt là mật thư có 2 đường ray song song. Để giải, tách chữ thành 2 nhóm lẻ–chẵn hoặc 2 hàng, rồi đọc xen kẽ hoặc ghép lại theo thứ tự.",

      keyword: "MẶT TRẬN CHỐNG ĐẾ QUỐC",
      explanation: (
        <>
          <b>Mặt trận chống đế quốc</b> trong tư tưởng Hồ Chí Minh là liên minh
          các lực lượng tiến bộ, dân chủ, yêu chuộng hòa bình trên thế giới,
          cùng đoàn kết ủng hộ Việt Nam chống đế quốc xâm lược.
        </>
      ),
      image: "/images/game7.jpg",
    },
    {
      title: "Câu hỏi 8",
      hint: "Mỗi dân tộc góp một phần vào đại đoàn kết",
      suggestion: "Gợi ý: Dựa vào từ khóa chỉ vị trí trong câu để giải mật thư",

      keyword: "ĐẤU TRANH THỐNG NHẤT",
      explanation: (
        <>
          <b>Đấu tranh thống nhất</b> trong tư tưởng Hồ Chí Minh nhấn mạnh việc
          các dân tộc, các lực lượng trong nước hợp tác và đóng góp vào sự đoàn
          kết, tạo nên sức mạnh toàn dân.
        </>
      ),
      image: "/images/game8.jpg",
    },
    {
      title: "Câu hỏi 9",
      hint: "Gió cuộn lời dân tộc vào vòng hòa bình",
      suggestion:
        "Gợi ý: Gió cuộn thoe hình xoắn ốc từ ngoài vào trong, bắt đầu từ chữ cái bên ngoài cùng để giải mã.",

      keyword: "BÌNH ĐẲNG TỰ NGUYỆN",
      explanation: (
        <>
          <b>Bình đẳng - Tự nguyện</b> trong tư tưởng Hồ Chí Minh là cơ sở để
          xây dựng liên minh, mặt trận quốc tế và trong nước, đảm bảo mọi bên
          đều tôn trọng quyền lợi và tự do của nhau.
        </>
      ),
      image: "/images/game9.jpg",
    },
    {
      title: "Câu hỏi 10",
      hint: "Bắt đầu là cách mạng, kết thúc là hòa bình",
      suggestion: "Gợi ý: Tìm theo hình rắn cắn đuôi để tìm ra từ khóa.",

      keyword: "PHONG TRÀO GIẢI PHÓNG DÂN TỘC",
      explanation: (
        <>
          <b>Phong trào giải phóng dân tộc</b> là lực lượng giúp các dân tộc
          thuộc địa chống thực dân, đế quốc, đấu tranh giành độc lập, tự do và
          hòa bình.
        </>
      ),
      image: "/images/game10.jpg",
    },
    {
      title: "Câu hỏi 11",
      hint: "Sức mạnh dân tộc bắt đầu khi nỗi Hận hóa thành lời Hẹn cùng nhau đi tới hòa bình.",
      suggestion:
        "Gợi ý: Đây là mật thư kí tự thay kí tự. Hãy tìm bảng mã để giải mã từ khóa. Hận và Hẹn",

      keyword: "THỐNG NHẤT MỤC TIÊU",
      explanation: (
        <>
          <b>Thống nhất mục tiêu</b> trong tư tưởng Hồ Chí Minh là nền tảng để
          các lực lượng phối hợp hành động, đảm bảo mọi lực lượng cùng hướng tới
          mục tiêu chung.
        </>
      ),
      image: "/images/game11.jpg",
    },
    {
      title: "Câu hỏi 12",
      hint: (
        <>
          Tư tưởng Hồ Chí Minh hướng nhân loại đến một thế giới nơi người mù
          được thấy, kẻ què được đi, người cùi được sạch, người điếc được nghe,
          và kẻ chết lại được sống – như một ẩn dụ tuyệt đẹp về sức mạnh chữa
          lành của đoàn kết quốc tế.
        </>
      ),
      suggestion:
        "Gợi ý: Dựa vào 5 cặp từ trong gợi ý, lần lượt là hàng và cột, lập bảng mã để giải từ khóa.",

      keyword: "DIỄN ĐÀN QUỐC TẾ",
      explanation: (
        <>
          <b>Diễn đàn quốc tế</b> là không gian để các quốc gia, dân tộc gặp gỡ,
          thảo luận và hợp tác, thể hiện tinh thần <b>đoàn kết quốc tế</b> theo
          tư tưởng Hồ Chí Minh.
        </>
      ),
      image: "/images/game12.jpg",
    },
    {
      title: "Câu hỏi 13",
      hint: (
        <>
          Tình đoàn kết quốc tế chỉ bền vững khi ta biết giữ lại những giá trị
          sáng ở từng nhịp bước đầu, và bỏ đi những điều mờ tối chen vào sau đó,
          để tiếng nói hòa bình vang lên mạnh mẽ hơn.
        </>
      ),
      suggestion:
        "Gợi ý: Dựa vào mật thư chữ cái bị lặp lại, giữ lại chữ đầu tiên và bỏ chữ thứ hai để giải từ khóa.",

      keyword: "LỢI ÍCH HÀI HÒA",
      explanation: (
        <>
          <b>Lợi ích hài hòa</b> trong tư tưởng Hồ Chí Minh là sự cân nhắc, điều
          chỉnh lợi ích của các bên để duy trì <b>đoàn kết quốc tế</b> bền vững
          và hiệu quả.
        </>
      ),
      image: "/images/game13.jpg",
    },
    {
      title: "Câu hỏi 14",
      hint: (
        <>
          Trong tư tưởng Hồ Chí Minh, sức mạnh đoàn kết bền vững không đến từ
          những lời đầu tiên dễ nói, mà nằm ở những giá trị sâu thẳm ở gần cuối;
          chính những điều ấy mới tạo nên một tâm hồn chân thành và một thế giới
          trong sáng.
        </>
      ),
      suggestion:
        "Gợi ý: Dựa vào mật thư chữ cái ở vị trí của mỗi câu để giải từ khóa.",

      keyword: "CHÂN THÀNH TRONG SÁNG",
      explanation: (
        <>
          <b>Chân thành – Trong sáng</b> trong tư tưởng Hồ Chí Minh là yếu tố
          then chốt để xây dựng <b>đoàn kết quốc tế</b> bền vững, dựa trên lòng
          tin, minh bạch và sự tôn trọng lẫn nhau.
        </>
      ),
      image: "/images/game14.jpg",
    },
    {
      title: "Câu hỏi 15",
      hint: <>“Ta về ta tắm ao ta, Dù trong dù đục ao nhà vẫn hơn.”</>,
      suggestion:
        "Gợi ý: Bỏ các kí tự không có trong bảng chữ cái Việt Nam để giải từ khóa.",

      keyword: "CÁC ĐẢNG ANH EM",
      explanation: (
        <>
          <b>Các Đảng anh em</b> trong tư tưởng Hồ Chí Minh là những Đảng độc
          lập, bình đẳng, cùng đoàn kết, hỗ trợ lẫn nhau nhưng không can thiệp
          vào công việc nội bộ của nhau.
        </>
      ),
      image: "/images/game15.jpg",
    },
    {
      title: "Câu hỏi 16",
      hint: (
        <>
          “Trong phong trào đoàn kết quốc tế, có những thông điệp không nói bằng
          lời, mà gửi đi bằng những nhịp dài ngắn của niềm tin chung.”
        </>
      ),
      suggestion:
        "Gợi ý: Nhịp dài ngắn tượng trưng cho mã Morse. Sử dụng bảng mã Morse để giải từ khóa.",

      keyword: "GIỮ ĐỘC LẬP TỰ CHỦ",
      explanation: (
        <>
          <b>Giữ độc lập, tự chủ</b> trong tư tưởng Hồ Chí Minh là nguyên tắc cơ
          bản để tham gia đoàn kết quốc tế: vừa hợp tác vừa không phụ thuộc, dựa
          vào nội lực của mình trước tiên.
        </>
      ),
      image: "/images/game16.jpg",
    },
    {
      title: "Câu hỏi 17",
      hint: (
        <>
          “Hòa bình nhiều lúc đến từ việc quay nhìn về phía sau, để thấy những
          điều ta tưởng đã cũ vẫn đang soi sáng con đường phía trước.”
        </>
      ),
      suggestion: "Gợi ý: Đọc ngược câu để giải từ khóa.",

      keyword: "ĐOÀN KẾT BỀN VỮNG",
      explanation: (
        <>
          <b>Đoàn kết bền vững</b> trong tư tưởng Hồ Chí Minh là sự hợp tác quốc
          tế lâu dài, dựa trên niềm tin, tôn trọng và lợi ích chung, tạo nền
          tảng cho hòa bình và phát triển.
        </>
      ),
      image: "/images/game17.jpg",
    },
    {
      title: "Câu hỏi 18",
      hint: (
        <>
          “Từ Bắc đến Nam, những con sông mang vị mặn của biển Việt đều chảy
          chung về một biển lớn vì đất nước này chỉ là một mà thôi.”
        </>
      ),
      suggestion: "Gợi ý: Đất nước chỉ là một: S = 1",
      keyword: "HỖ TRỢ TINH THẦN",
      explanation: (
        <>
          <b>Hỗ trợ tinh thần</b> trong tư tưởng Hồ Chí Minh là việc khích lệ,
          cổ vũ và đồng cảm với các lực lượng quốc tế, giúp duy trì tinh thần
          đoàn kết và nỗ lực chung vì mục tiêu cách mạng.
        </>
      ),
      image: "/images/game18.jpg",
    },
    {
      title: "Câu hỏi 19",
      hint: (
        <>
          “Trong hành trình gìn giữ độc lập và xây dựng sức mạnh đoàn kết quốc
          tế, có những giá trị chỉ hiện lên ở bước thứ năm của lòng người và
          sáng rõ ở tầng thứ tám của nghĩa tình.”
        </>
      ),
      suggestion:
        "Gợi ý: Lấy chữ cái ở vị trí thứ 5 hoặc thứ 8 trong mỗi từ để giải từ khóa.",
      keyword: "HỖ TRỢ VẬT CHẤT",
      explanation: (
        <>
          <b>Hỗ trợ vật chất</b> trong tư tưởng Hồ Chí Minh là việc cung cấp
          nguồn lực, vật chất, trang thiết bị và phương tiện cần thiết để hỗ trợ
          các lực lượng quốc tế, góp phần tăng cường sức mạnh đoàn kết và thực
          hiện mục tiêu chung.
        </>
      ),
      image: "/images/game19.jpg",
    },
    {
      title: "Câu hỏi 20",
      hint: (
        <>
          “Trong hành trình kết nối nhân loại, có những giá trị không nhìn theo
          lối thẳng.”
        </>
      ),
      suggestion: "Gợi ý: Không nhìn theo lối thẳng: Không nhìn xuôi",
      keyword: "BẠN BÈ QUỐC TẾ",
      explanation: (
        <>
          <b>Bạn bè quốc tế</b> trong tư tưởng Hồ Chí Minh là các lực lượng,
          quốc gia, tổ chức có cùng mục tiêu, cùng tôn trọng độc lập và quyền tự
          quyết của các dân tộc, hỗ trợ Việt Nam và góp phần củng cố đoàn kết
          quốc tế.
        </>
      ),
      image: "/images/game20.jpg",
    },
  ];

  const [states, setStates] = useState(
    puzzles.map((_, index) => ({
      answer: "",
      unlocked: true,
      solved: false,
      feedback: "",
      isError: false,
      showSuggestion: false,
    }))
  );

  const solvedCount = states.filter((p) => p.solved).length;
  const percent = Math.round((solvedCount / puzzles.length) * 100);

  const handleChange = (idx, value) => {
    const upper = value.toUpperCase();
    setStates((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, answer: upper, feedback: "", isError: false } : p
      )
    );
  };

  const handleSubmit = (idx) => {
    setStates((prev) => {
      const current = prev[idx];
      if (current.solved) return prev;

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

  const toggleSuggestion = (idx) => {
    setStates((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, showSuggestion: !p.showSuggestion } : p
      )
    );
  };

  const helpContent = (
    <div className="help-content">
      <h4>📖 Hướng dẫn chơi</h4>
      <ul>
        <li>Đọc kỹ câu hỏi và gợi ý để tìm từ khóa</li>
        <li>
          Nhập từ khóa có dấu, viết hoa, có nghĩa (ví dụ: "PHONG TRÀO CỘNG SẢN")
        </li>
        <li>Bạn có thể xem gợi ý chi tiết bằng cách nhấn nút "Gợi ý"</li>
        <li>Hoàn thành câu hỏi để xem kết quả, giải thích,...</li>
      </ul>
    </div>
  );

  return (
    <div className="game-page">
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>

      <section id="game-zone" className="module game">
        <div className="module-head">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <h2>Trò chơi giải mật mã</h2>
            <button
              className="help-btn"
              onClick={() => setShowHelp(!showHelp)}
              title="Hướng dẫn"
            >
              ❓ Hướng dẫn
            </button>
          </div>
          {showHelp && <div className="help-modal">{helpContent}</div>}
          <p>
            Nhập đúng từ khóa để mở khóa từng câu hỏi và xem lời giải thích.
          </p>
        </div>

        <div id="game-progress">
          <div className="progress-bar">
            <span id="progress-fill" style={{ width: `${percent}%` }}></span>
          </div>
          <p id="progress-text">{percent}% hoàn thành</p>
        </div>

        <div id="puzzle-container">
          {puzzles.map((puzzle, index) => {
            const state = states[index];
            const puzzleClass = [
              "puzzle",
              "unlocked",
              state.solved ? "solved" : "",
              state.isError ? "shake" : "",
            ]
              .filter(Boolean)
              .join(" ");

            const disabled = state.solved;

            return (
              <div className={puzzleClass} data-index={index} key={index}>
                <div className="puzzle-header">
                  <div className="puzzle-image-wrapper">
                    {puzzle.image ? (
                      <img
                        src={puzzle.image}
                        alt={puzzle.title}
                        onClick={() => setSelectedImage(puzzle.image)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <div className="puzzle-image-placeholder">
                        <span>📚</span>
                      </div>
                    )}
                  </div>
                  <div className="puzzle-info">
                    <h3>{puzzle.title}</h3>
                    <p className="hint">{puzzle.hint}</p>
                  </div>
                </div>

                <div className="puzzle-content">
                  <div className="puzzle-main">
                    <input
                      type="text"
                      placeholder="Nhập từ khóa (có dấu, viết cách, có nghĩa)..."
                      className="answer-input"
                      value={state.answer}
                      disabled={disabled}
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                    <div className="puzzle-actions">
                      <button
                        className="submit-btn"
                        disabled={disabled}
                        onClick={() => handleSubmit(index)}
                      >
                        ✓ Xác nhận
                      </button>
                      <button
                        className="suggestion-btn"
                        onClick={() => toggleSuggestion(index)}
                        disabled={disabled}
                      >
                        💡 Gợi ý
                      </button>
                    </div>
                  </div>

                  {state.showSuggestion && (
                    <div className="suggestion-box">
                      <p>{puzzle.suggestion}</p>
                      {puzzle.suggestionImage && (
                        <div className="suggestion-image">
                          <img
                            src={puzzle.suggestionImage}
                            alt="Gợi ý"
                            onClick={() =>
                              setSelectedImage(puzzle.suggestionImage)
                            }
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  <p
                    className={
                      "feedback " +
                      (state.isError ? "error" : state.solved ? "success" : "")
                    }
                  >
                    {state.feedback}
                  </p>

                  {state.solved && (
                    <div className="explanation">
                      <h4>✨ Giải thích:</h4>
                      <p>{puzzle.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button className="image-modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button> */}
            <img src={selectedImage} alt="Phóng to" />
          </div>
        </div>
      )}
    </div>
  );
}
