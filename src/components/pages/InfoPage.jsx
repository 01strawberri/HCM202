export default function InfoPage() {
  return (
    <div>

      {/* Philosophy Section - Tổng quan đến Recap */}
      <section className="philosophy-section" id="overview">
        {/* Top Historical Ornament */}
        <div className="historical-ornament top-ornament">
          <div className="ornament-line"></div>
          <div className="ornament-center">❦</div>
          <div className="ornament-line"></div>
        </div>

        <div className="philosophy-container">
          {/* Section Header */}
          <div className="section-header">
            {/* Historical Portrait */}
            <div className="historical-portrait">
              <div className="portrait-frame">
                <img 
                  src="https://i.postimg.cc/dQkKyVDZ/tu-tuong-ho-chi-minh-ve-van-de-dan-toc-may-van-de-ban-luan18052015100122.gif" 
                  alt="Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế"
                  className="portrait-image"
                />
                <div className="portrait-overlay"></div>
              </div>
            </div>

            <h1 className="section-title">
              <span className="title-ornament">❦</span>
              Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế
              <span className="title-ornament">❦</span>
            </h1>
            <p className="section-subtitle">
              Cô đọng nhất về lực lượng và nguyên tắc đoàn kết quốc tế. Tinh thần "bốn phương vô sản đều là anh em" được Hồ Chí Minh cụ thể hóa qua các liên minh chiến lược và những nguyên tắc vừa kiên định mục tiêu, vừa đề cao độc lập tự chủ.
            </p>

            {/* Historical Timeline */}
            <div className="historical-timeline">
              <div className="timeline-item">
                <div className="timeline-year">1890-1969</div>
                <div className="timeline-name">Hồ Chí Minh</div>
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-item">
                <div className="timeline-year">Đoàn kết quốc tế</div>
                <div className="timeline-name">Tư tưởng cốt lõi</div>
              </div>
            </div>
          </div>

          {/* Tổng quan Block */}
          <div className="philosophy-block">
            <div className="block-header">
              <div className="header-left">
                <div className="block-icon">🌍</div>
                <h2>Tổng quan</h2>
              </div>
              <div className="header-decoration">
                <div className="decoration-scroll">📜</div>
              </div>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <div className="card-header">
                  <h3>03 Khối lực lượng cần quy tụ</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p>Ba lực lượng chủ yếu trong đoàn kết quốc tế theo tư tưởng Hồ Chí Minh:</p>
                  <ul>
                    <li>Phong trào cộng sản & công nhân quốc tế</li>
                    <li>Phong trào giải phóng dân tộc</li>
                    <li>Lực lượng yêu chuộng hòa bình, dân chủ</li>
                  </ul>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>04 Tầng mặt trận đoàn kết</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p>Lộ trình mở rộng mặt trận đoàn kết:</p>
                  <div className="highlight-box">
                    <p><strong>Việt Nam</strong> ↔ <strong>Đông Dương</strong> ↔ <strong>Á - Phi</strong> ↔ <strong>Thế giới</strong></p>
                  </div>
                  <p>Mở rộng từ trong nước ra khu vực và toàn cầu.</p>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>02 Nguyên tắc cốt lõi</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p><strong>Thống nhất mục tiêu và lợi ích</strong> - Có lý, có tình</p>
                  <p><strong>Tự lực là gốc, ngoại lực là trợ lực</strong> - Độc lập, tự chủ</p>
                  <blockquote>
                    "Tự lực cánh sinh, dựa vào sức mình là chính"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Lực lượng & hình thức tổ chức Block */}
          <div className="philosophy-block" id="forces">
            <div className="block-header">
              <div className="header-left">
                <div className="block-icon">⚡</div>
                <h2>Lực lượng & hình thức tổ chức</h2>
              </div>
              <div className="header-decoration">
                <div className="decoration-hammer">⚒️</div>
                <div className="decoration-star">⭐</div>
              </div>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <div className="card-header">
                  <h3>Phong trào cộng sản & công nhân quốc tế</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p>Đoàn kết giai cấp công nhân toàn thế giới bảo đảm thắng lợi cho chủ nghĩa cộng sản.</p>
                  <ul>
                    <li>Chống lại chủ nghĩa tư bản – lực lượng phản động quốc tế</li>
                    <li>Cùng nhau theo tinh thần "bốn phương vô sản đều là anh em"</li>
                    <li>Liên kết giữa các đảng cộng sản xuất phát từ vai trò tiên phong của công nhân</li>
                  </ul>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>Phong trào giải phóng dân tộc</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p>Sớm cảnh báo mưu đồ chia rẽ của đế quốc và yêu cầu Quốc tế Cộng sản kết nối các dân tộc thuộc địa.</p>
                  <ul>
                    <li>Chủ trương hình thành "liên minh phương Đông" – một cánh của cách mạng vô sản</li>
                    <li>Tăng cường tiếp xúc giữa cách mạng thuộc địa và vô sản chính quốc</li>
                    <li>Chuẩn bị hợp tác thực chất</li>
                  </ul>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>Lực lượng yêu chuộng hòa bình, dân chủ</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <p>Tranh thủ nhân dân các nước đang xâm lược Việt Nam thông qua phong trào chống chiến tranh.</p>
                  <ul>
                    <li>Kết hợp mục tiêu độc lập dân tộc với hòa bình, công lý, bình đẳng</li>
                    <li>Chạm tới lương tri tiến bộ</li>
                    <li>Sự đồng tình của trí thức, quần chúng quốc tế giúp Đảng vượt qua khó khăn</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hình thức tổ chức */}
            <div className="focus-panel" style={{ marginTop: '30px' }}>
              <div>
                <h3>Hình thức tổ chức</h3>
                <p>Các sáng kiến tiêu biểu thể hiện tư duy chiến lược của Hồ Chí Minh:</p>
                <ul>
                  <li><strong>1924:</strong> Đề xuất "Mặt trận thống nhất của nhân dân chính quốc và thuộc địa" chống đế quốc</li>
                  <li><strong>1941:</strong> Thành lập Việt Minh, hỗ trợ Lào và Campuchia xây dựng mặt trận yêu nước</li>
                  <li><strong>Kháng chiến:</strong> Dựng Mặt trận nhân dân ba nước Đông Dương; mở rộng sang Á - Phi và mặt trận nhân dân thế giới</li>
                  <li>Duy trì liên kết mật thiết với Trung Quốc, các dân tộc Á - Phi và lực lượng đồng minh chống phát xít</li>
                </ul>
              </div>
              <div className="timeline">
                <h4>Dòng thời gian tóm gọn</h4>
                <ul>
                  <li><strong>1924</strong> · Kiến nghị mặt trận thống nhất chính quốc - thuộc địa</li>
                  <li><strong>1941</strong> · Việt Minh ra đời, khơi dậy sức mạnh tự quyết</li>
                  <li><strong>Kháng chiến</strong> · Hình thành mặt trận nhân dân Đông Dương, Á - Phi</li>
                  <li><strong>Kháng chiến chống Mỹ</strong> · Mặt trận nhân dân thế giới đoàn kết với Việt Nam</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nguyên tắc đoàn kết quốc tế Block */}
          <div className="philosophy-block" id="principles">
            <div className="block-header">
              <div className="header-left">
                <div className="block-icon">⚖️</div>
                <h2>Nguyên tắc đoàn kết quốc tế</h2>
              </div>
              <div className="header-decoration">
                <div className="decoration-scroll">📜</div>
              </div>
            </div>

            <div className="dual-column">
              <div className="column">
                <div className="column-header">
                  <h3>a. Có lý · có tình</h3>
                  <span className="role-badge">Thống nhất mục tiêu và lợi ích</span>
                </div>
                <div className="role-content">
                  <div className="role-item">
                    <div className="role-number">1</div>
                    <div className="role-text">
                      <h4>Đặt cách mạng Việt Nam trong bối cảnh chung</h4>
                      <p>Gắn lợi ích dân tộc với trào lưu cách mạng thế giới, kiên định ngọn cờ độc lập dân tộc gắn với chủ nghĩa xã hội.</p>
                    </div>
                  </div>
                  <div className="role-item">
                    <div className="role-number">2</div>
                    <div className="role-text">
                      <h4>Đoàn kết trên nền tảng chủ nghĩa Mác - Lênin</h4>
                      <p>Tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ của mọi quốc gia; chủ trương "làm bạn với tất cả các nước dân chủ" (1947).</p>
                    </div>
                  </div>
                  <div className="role-item">
                    <div className="role-number">3</div>
                    <div className="role-text">
                      <h4>Giương cao ngọn cờ hòa bình</h4>
                      <p>Đấu tranh chống chiến tranh xâm lược vì một nền hòa bình chân chính đặt trên công bằng và lý tưởng dân chủ.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="column-header">
                  <h3>b. Độc lập · tự chủ</h3>
                  <span className="role-badge">Tự lực là gốc, ngoại lực là trợ lực</span>
                </div>
                <div className="role-content">
                  <div className="role-item">
                    <div className="role-number">1</div>
                    <div className="role-text">
                      <h4>Tự lực cánh sinh</h4>
                      <p>Đoàn kết quốc tế nhằm gia tăng nội lực, nhưng nội lực mới là yếu tố quyết định. "Tự lực cánh sinh, dựa vào sức mình là chính".</p>
                    </div>
                  </div>
                  <div className="role-item">
                    <div className="role-number">2</div>
                    <div className="role-text">
                      <h4>Tranh thủ viện trợ khi đã có thực lực</h4>
                      <p>"Muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình" – chỉ tranh thủ viện trợ khi đã có thực lực.</p>
                    </div>
                  </div>
                  <div className="role-item">
                    <div className="role-number">3</div>
                    <div className="role-text">
                      <h4>Thực lực là cái chiêng, ngoại giao là cái tiếng</h4>
                      <p>Trong ngoại giao phải có đường lối độc lập, tự chủ, đúng đắn. Các Đảng dù lớn hay nhỏ đều bình đẳng, đoàn kết giúp đỡ lẫn nhau.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recap nhanh Block */}
          <div className="philosophy-block" id="recap">
            <div className="block-header">
              <div className="header-left">
                <div className="block-icon">📚</div>
                <h2>Recap nhanh</h2>
              </div>
              <div className="header-decoration">
                <div className="decoration-star">⭐</div>
              </div>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <div className="card-header">
                  <h3>Ví dụ tiêu biểu</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <ul>
                    <li>Hội nghị quốc tế ủng hộ Việt Nam tại Stockholm (1967)</li>
                    <li>Trí thức Pháp và phong trào phản chiến Mỹ đứng về phía Việt Nam</li>
                    <li>Liên minh Á - Phi đoàn kết với Việt Nam chống đế quốc xâm lược</li>
                  </ul>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>Mindset áp dụng</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <ul>
                    <li>Đặt lợi ích dân tộc trong mạng lưới lợi ích chung nhân loại</li>
                    <li>Tự chủ nội lực, mở cửa hợp tác để nhân đôi sức mạnh</li>
                    <li>Độc lập nhưng không tách rời trách nhiệm quốc tế</li>
                  </ul>
                </div>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h3>Checklist ghi nhớ</h3>
                  <div className="card-accent"></div>
                </div>
                <div className="card-content">
                  <ul>
                    <li>Xác định đúng đồng minh chiến lược</li>
                    <li>Giữ nguyên tắc nhưng linh hoạt về hình thức mặt trận</li>
                    <li>Kết hợp hòa bình - công lý - độc lập trong mọi thông điệp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Historical Ornament */}
        <div className="historical-ornament bottom-ornament">
          <div className="ornament-pattern">
            <div className="pattern-element">❦</div>
            <div className="pattern-element">⚡</div>
            <div className="pattern-element">❦</div>
            <div className="pattern-element">⚡</div>
            <div className="pattern-element">❦</div>
          </div>
        </div>
      </section>
    </div>
  );
}
