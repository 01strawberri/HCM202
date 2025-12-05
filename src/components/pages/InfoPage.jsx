import { useState, useRef, useEffect } from 'react';
import './InfoPage.css';

export default function InfoPage() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const items = [
    {
      id: 5,
      title: 'Ý nghĩa và giá trị',
      topic: 'Vận dụng trong thực tiễn',
      description: 'Tư tưởng đoàn kết quốc tế của Hồ Chí Minh đã góp phần quan trọng vào thắng lợi của cách mạng Việt Nam. Chính vì đã biết kết hợp phong trào cách mạng nước ta với phong trào cách mạng của giai cấp công nhân và của các dân tộc bị áp bức, mà Đảng đã vượt qua được mọi khó khăn.',
      image: '/images/ynghia.jpg',
      detail: {
        title: 'Ý nghĩa và giá trị',
        content: (
          <>
            <h4>
              <b>Thắng lợi của tư tưởng đoàn kết quốc tế:</b>
            </h4>
            <p>Chính vì đã biết kết hợp phong trào cách mạng nước ta với phong trào cách mạng của giai cấp công nhân và của các dân tộc bị áp bức, mà Đảng đã vượt qua được mọi khó khăn, đưa giai cấp công nhân và nhân dân ta đến những thắng lợi vẻ vang.</p>

            <h4>
              <b>Hình thành mặt trận nhân dân thế giới:</b>
            </h4>
            <p>Đã hình thành một mặt trận nhân dân thế giới, có cả nhân dân Pháp và nhân dân Mỹ, đoàn kết với Việt Nam chống đế quốc xâm lược, góp phần kết thúc thắng lợi hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ.</p>

            <h4>
              <b>Giá trị lịch sử:</b>
            </h4>
            <p>Tư tưởng đoàn kết vì thắng lợi của cách mạng Việt Nam đã định hướng cho việc hình thành bốn tầng mặt trận. Đây thực sự là sự phát triển rực rỡ nhất và thắng lợi to lớn nhất của tư tưởng Hồ Chí Minh về đại đoàn kết.</p>

            <h4>
              <b>Ý nghĩa hiện đại:</b>
            </h4>
            <p>Tư tưởng này vẫn còn nguyên giá trị trong bối cảnh hội nhập quốc tế hiện nay, giúp Việt Nam vừa giữ được độc lập tự chủ, vừa mở rộng hợp tác quốc tế. Đặt lợi ích dân tộc trong mạng lưới lợi ích chung nhân loại, tự chủ nội lực nhưng mở cửa hợp tác để nhân đôi sức mạnh.</p>
          </>
        ),
        specifications: [
          { label: 'Thắng lợi', value: 'Hai cuộc kháng chiến' },
          { label: 'Mặt trận', value: 'Nhân dân thế giới' },
          { label: 'Giá trị', value: 'Vẫn còn nguyên' },
          { label: 'Ý nghĩa', value: 'Hội nhập quốc tế' }
        ]
      }
    },
    {
      id: 1,
      title: 'Tổng quan về Đoàn kết quốc tế',
      topic: 'Tư tưởng Hồ Chí Minh',
      description: 'Tư tưởng Hồ Chí Minh về đoàn kết quốc tế là một trong những nội dung cốt lõi của chủ nghĩa Mác - Lênin được vận dụng sáng tạo vào thực tiễn cách mạng Việt Nam. Đoàn kết quốc tế không chỉ là yêu cầu khách quan của cách mạng, mà còn là nguyên tắc chiến lược quan trọng.',
      image: '/images/Homepage.gif',
      detail: {
        title: 'Tổng quan về Đoàn kết quốc tế',
        content: (
          <>
            <h4>
              <b>02 Nguyên tắc cốt lõi:</b>
            </h4>
            <ul>
              <li>Thống nhất mục tiêu và lợi ích - Có lý, có tình</li>
              <li>Tự lực là gốc, ngoại lực là trợ lực - Độc lập, tự chủ</li>
            </ul>
            <h4>
              <b>03 Khối lực lượng cần quy tụ:</b>
            </h4>
            <ul>
              <li>Phong trào cộng sản & công nhân quốc tế</li>
              <li>Phong trào giải phóng dân tộc</li>
              <li>Lực lượng yêu chuộng hòa bình, dân chủ</li>
            </ul>
            <h4>
              <b>04 Tầng mặt trận đoàn kết:</b> Việt Nam ↔ Đông Dương ↔ Á - Phi ↔ Thế giới
            </h4>

          </>
        ),
        specifications: [
          { label: 'Lực lượng', value: '03 khối chính' },
          { label: 'Mặt trận', value: '04 tầng' },
          { label: 'Nguyên tắc', value: '02 cốt lõi' },
          { label: 'Mục tiêu', value: 'Đại đoàn kết dân tộc' }
        ]
      }
    },
    {
      id: 3,
      title: 'Lực lượng và hình thức tổ chức đoàn kết quốc tế',
      topic: 'Phong trào cách mạng thế giới & Mặt trận đoàn kết',
      description:
        'Lực lượng đoàn kết quốc tế gồm phong trào cộng sản, phong trào giải phóng dân tộc và lực lượng tiến bộ thế giới; tổ chức thành nhiều tầng mặt trận.',
      image: '/images/lucluong.jpg',
      detail: {
        title: 'Lực lượng đoàn kết quốc tế và hình thức tổ chức',
        content: (
          <>

            <h3><b>a. Các lực lượng cần đoàn kết</b></h3>
            <p>
              <b>1. Phong trào cộng sản và công nhân quốc tế</b><br />
              Đoàn kết giữa các Đảng và giai cấp công nhân là nền tảng để chống chủ nghĩa đế quốc,
              tạo hậu thuẫn quốc tế cho cách mạng Việt Nam.
            </p>

            <p>
              <b>2. Phong trào đấu tranh giải phóng dân tộc</b><br />
              Gắn bó giữa các dân tộc thuộc địa giúp tăng sức mạnh chống thực dân,
              cùng hỗ trợ nhau giành độc lập.
            </p>

            <p>
              <b>3. Các lực lượng tiến bộ, yêu chuộng hòa bình</b><br />
              Trí thức, phong trào phản chiến, lực lượng dân chủ ủng hộ Việt Nam vì mục tiêu hòa bình,
              công lý và quyền tự quyết của các dân tộc.
            </p>

            <h3><b>b. Hình thức tổ chức</b></h3>
            <p>Hình thành 4 tầng mặt trận:</p>
            <ul>
              <li>Đại đoàn kết dân tộc.</li>
              <li>Việt Nam – Lào – Campuchia.</li>
              <li>Mặt trận nhân dân Á – Phi.</li>
              <li>Mặt trận nhân dân thế giới ủng hộ Việt Nam.</li>
            </ul>
          </>
        ),
        specifications: [
          { label: 'Lực lượng 1', value: 'Phong trào cộng sản & công nhân quốc tế' },
          { label: 'Lực lượng 2', value: 'Phong trào giải phóng dân tộc' },
          { label: 'Lực lượng 3', value: 'Lực lượng tiến bộ yêu chuộng hòa bình' },
          { label: 'Hình thức tổ chức', value: 'Bốn tầng mặt trận quốc tế' }
        ]
      }
    },
    
    {
      id: 4,
      title: 'Nguyên tắc đoàn kết quốc tế',
      topic: 'Có lý, có tình & Độc lập, tự chủ',
      description: 'Hai nguyên tắc cốt lõi: Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích (có lý, có tình) và Đoàn kết trên cơ sở độc lập, tự chủ (tự lực là gốc, ngoại lực là trợ lực).',
      image: '/images/nguyentac.jpg',
      detail: {
        title: 'Nguyên tắc đoàn kết quốc tế',
        content: (
          <>
            <h3><b>a. Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích; có lý, có tình</b></h3>

            <p><b>1. Thống nhất mục tiêu chung</b></p>
            <p>
              Hồ Chí Minh đặt cách mạng Việt Nam trong bối cảnh cách mạng thế giới,
              kết hợp lợi ích dân tộc với lợi ích chung của thời đại.
            </p>

            <p><b>2. Nền tảng Mác – Lênin</b></p>
            <p>
              Đoàn kết với phong trào cộng sản và công nhân quốc tế dựa trên chủ nghĩa
              Mác – Lênin và tinh thần quốc tế vô sản, “có lý, có tình”.
            </p>

            <p><b>3. Tôn trọng độc lập, chủ quyền</b></p>
            <p>
              Việt Nam tôn trọng chủ quyền mọi dân tộc; thực hiện đường lối “làm bạn với
              tất cả các nước dân chủ và không gây thù oán với ai” (1947).
            </p>

            <p><b>4. Giương cao ngọn cờ hòa bình</b></p>
            <p>
              Kiên trì đấu tranh vì hòa bình, phản đối chiến tranh xâm lược;
              xây dựng “hòa bình trong độc lập, tự do”.
            </p>

            <h3><b>b. Đoàn kết trên cơ sở độc lập, tự chủ</b></h3>

            <p><b>1. Tự lực cánh sinh</b></p>
            <p>
              Nội lực là quyết định; quốc tế ủng hộ chỉ phát huy khi ta mạnh.
              “Muốn người ta giúp cho, trước hết mình phải tự giúp mình đã”.
            </p>

            <p><b>2. Đường lối độc lập và đúng đắn</b></p>
            <p>
              Tranh thủ được quốc tế khi có đường lối tự chủ:
              “Độc lập nghĩa là tự điều khiển lấy mọi công việc của mình”.
            </p>

            <p><b>3. Thực lực là cái chiêng, ngoại giao là cái tiếng</b></p>
            <p>
              Có thực lực thì tiếng nói đối ngoại mới mạnh.
              Các Đảng trong phong trào cộng sản dù lớn hay nhỏ đều bình đẳng và đoàn kết.
            </p>
          </>
        ),
        specifications: [
          { label: 'Nguyên tắc 1', value: 'Có lý, có tình' },
          { label: 'Nguyên tắc 2', value: 'Độc lập, tự chủ' },
          { label: 'Nền tảng', value: 'Mác - Lênin' },
          { label: 'Khẩu hiệu', value: 'Tự lực cánh sinh' }
        ]
      }
    }
    
  ];

  const handleNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (carouselRef.current) {
      carouselRef.current.classList.remove('prev');
      carouselRef.current.classList.add('next');
    }

    setTimeout(() => {
      if (listRef.current) {
        const firstItem = listRef.current.firstElementChild;
        if (firstItem) {
          listRef.current.appendChild(firstItem);
        }
      }
      if (carouselRef.current) {
        carouselRef.current.classList.remove('next');
      }
      setCurrentIndex((prev) => (prev + 1) % items.length);
      isTransitioningRef.current = false;
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (carouselRef.current) {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      if (listRef.current) {
        const lastItem = listRef.current.lastElementChild;
        if (lastItem) {
          listRef.current.prepend(lastItem);
        }
      }
      if (carouselRef.current) {
        carouselRef.current.classList.remove('prev');
      }
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      isTransitioningRef.current = false;
    }, 500);
  };

  const handleSeeMore = () => {
    setShowDetail(true);
    if (carouselRef.current) {
      carouselRef.current.classList.add('showDetail');
    }
  };

  const handleBack = () => {
    setShowDetail(false);
    if (carouselRef.current) {
      carouselRef.current.classList.remove('showDetail');
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="info-page">
      {/* ORNAMENT ĐẶT NGAY DƯỚI NAVBAR */}
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {items.map((item, index) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.title} />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore" onClick={handleSeeMore}>
                  XEM THÊM →
                </button>
              </div>
              <div className="detail">
                <div className="title">{item.detail.title}</div>
                <div className="des">{item.detail.content}</div>
                {item.detail.specifications && (
                  <div className="specifications">
                    {item.detail.specifications.map((spec, idx) => (
                      <div key={idx}>
                        <p>{spec.label}</p>
                        <p>{spec.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>&lt;</button>
          <button id="next" onClick={handleNext}>&gt;</button>
          <button id="back" onClick={handleBack} style={{ opacity: showDetail ? 1 : 0 }}>
            XEM TẤT CẢ →
          </button>
        </div>
      </div>
    </div>
  );
}
