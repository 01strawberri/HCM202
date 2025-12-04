export default function InfoPage({ section }) {
  switch (section) {
    case "overview":
      return (
        <div>
          <h1>Tư tưởng Hồ Chí Minh – Đoàn kết Quốc tế</h1>
          <p>
            Trang tóm lược các nội dung quan trọng: lực lượng, nguyên tắc và ví
            dụ minh họa về tư tưởng đại đoàn kết quốc tế của Hồ Chí Minh.
          </p>
        </div>
      );

    case "forces":
      return (
        <div>
          <h1>Lực lượng đoàn kết quốc tế</h1>
          <ul>
            <li>Phong trào cộng sản & công nhân quốc tế</li>
            <li>Phong trào giải phóng dân tộc</li>
            <li>Lực lượng yêu chuộng hòa bình - dân chủ</li>
          </ul>
        </div>
      );

    case "principles":
      return (
        <div>
          <h1>Nguyên tắc đoàn kết quốc tế</h1>
          <ul>
            <li>Có lý • Có tình – Thống nhất mục tiêu & lợi ích</li>
            <li>
              Độc lập • Tự chủ – Nội lực là quyết định, ngoại lực là quan trọng
            </li>
          </ul>
        </div>
      );

    case "recap":
      return (
        <div>
          <h1>Recap nhanh</h1>
          <ul>
            <li>
              Ví dụ: Stockholm 1967, phong trào phản chiến Mỹ, trí thức Pháp…
            </li>
            <li>Mindset: tự chủ nội lực – mở cửa hợp tác</li>
            <li>Checklist: đúng đồng minh – đúng hình thức mặt trận</li>
          </ul>
        </div>
      );

    default:
      return <h1>Trang không tồn tại</h1>;
  }
}
